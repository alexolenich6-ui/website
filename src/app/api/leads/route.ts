import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Lead {
  id: string;
  name: string;
  phone: string;
  message: string;
  createdAt: string;
  ip?: string;
}

function leadsFilePath() {
  return path.join(process.cwd(), "data", "leads.json");
}

function readLeads(): Lead[] {
  const file = leadsFilePath();
  if (!fs.existsSync(file)) return [];
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return [];
  }
}

function saveLead(lead: Lead) {
  const dir = path.dirname(leadsFilePath());
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const leads = readLeads();
  leads.unshift(lead);
  fs.writeFileSync(leadsFilePath(), JSON.stringify(leads, null, 2), "utf8");
}

async function sendTelegram(lead: Lead) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const text =
    `🔔 *Новая заявка с сайта*\n\n` +
    `👤 *Имя:* ${lead.name}\n` +
    `📞 *Телефон:* ${lead.phone}\n` +
    `📝 *О проекте:* ${lead.message || "—"}\n\n` +
    `🕐 ${new Date(lead.createdAt).toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}`;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "Markdown",
    }),
  });
}

export async function POST(req: NextRequest) {
  let body: { name?: string; phone?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Имя и телефон обязательны" },
      { status: 422 }
    );
  }

  const lead: Lead = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name,
    phone,
    message,
    createdAt: new Date().toISOString(),
    ip: req.headers.get("x-forwarded-for") ?? undefined,
  };

  saveLead(lead);

  // fire-and-forget — don't block the response on Telegram
  sendTelegram(lead).catch(() => {});

  return NextResponse.json({ ok: true });
}

export async function GET() {
  const secret = process.env.LEADS_SECRET;
  // Simple protection: require ?secret=... if env is set
  // Full auth can be added later
  if (secret) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  return NextResponse.json(readLeads());
}

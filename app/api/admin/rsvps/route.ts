import { NextResponse } from "next/server";
import { rsvps } from "@/data/rsvps";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw || req.headers.get("x-admin-password") !== pw) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const records = [...rsvps].sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
  return NextResponse.json({ rsvps: records });
}

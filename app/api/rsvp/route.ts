import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ error: "RSVP submissions are closed." }, { status: 410 });
}

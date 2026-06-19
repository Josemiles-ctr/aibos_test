// Test API route for AIBOS
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "AIBOS_API RUNNINNG" });
}

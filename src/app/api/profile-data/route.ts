import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    id: 1,
    name: "John Doe",
    email: "@johnlnwza007",
  });
}

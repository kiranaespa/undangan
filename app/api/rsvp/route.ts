import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data.json");

export async function POST(req: Request) {
  const body = await req.json();

  let data = [];

  if (fs.existsSync(filePath)) {
    const file = fs.readFileSync(filePath, "utf-8");
    data = JSON.parse(file);
  }

  data.push({
    name: body.name,
    guests: body.guests,
    time: new Date(),
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return NextResponse.json({ message: "success" });
}
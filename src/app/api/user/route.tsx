import { NextResponse } from "next/server";
import { createUserMessage } from "../../lib/userQueries";

export async function POST(req: any, res: any) {
  try {
    let body = await req.json();
    console.log(body);

    await createUserMessage(body);
    return new NextResponse(
      JSON.stringify({ message: "Done" }, { status: 200 })
    );
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
}

async function handlePost(req: any, res: any) {}

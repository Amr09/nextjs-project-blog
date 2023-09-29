import { NextResponse } from "next/server";
import { createUserMessage } from "../../lib/userQueries";

export async function POST(req: any, res: any) {
  try {
    let body = await req.json();
    console.log(body);

    await createUserMessage(body);
    return NextResponse.json(
      {
        message: "Done",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error:", error);
    NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}

async function handlePost(req: any, res: any) {}

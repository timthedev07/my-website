import { NextResponse } from "next/server";
import { getComments } from "../../../../mongodb/functions/getComments";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    return NextResponse.json(await getComments(id));
  } catch (error) {
    const status = typeof error === "number" ? error : 503;
    return new NextResponse(null, { status });
  }
}

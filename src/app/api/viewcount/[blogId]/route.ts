import { NextResponse } from "next/server";
import { collections, connectDB } from "../../../../mongodb";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ blogId: string }> }
) {
  await connectDB();
  if (!collections.blogViewCounts) return new NextResponse(null, { status: 503 });
  try {
    const { blogId } = await params;
    const result = await collections.blogViewCounts.findOne({ blogId });
    return result
      ? NextResponse.json(result.count)
      : new NextResponse(null, { status: 503 });
  } catch {
    return new NextResponse(null, { status: 503 });
  }
}

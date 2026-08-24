import { NextResponse } from "next/server";
import { collections, connectDB } from "../../../../../mongodb";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ blogId: string }> }
) {
  await connectDB();
  if (!collections.blogViewCounts) return new NextResponse(null, { status: 503 });
  const { blogId } = await params;
  const filter = { blogId };
  const existing = await collections.blogViewCounts.findOne(filter);
  if (existing) {
    await collections.blogViewCounts.updateOne(filter, { $inc: { count: 1 } });
    return NextResponse.json(existing.count + 1);
  }
  await collections.blogViewCounts.insertOne({ blogId, count: 1 });
  return NextResponse.json(1);
}

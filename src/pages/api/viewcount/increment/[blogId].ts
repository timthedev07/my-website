import { NextApiHandler } from "next";
import { connectDB, collections } from "../../../../mongodb";

const handler: NextApiHandler = async (req, res) => {
  await connectDB();

  const id = req.query.blogId;

  if (!collections.blogViewCounts || typeof id !== "string") {
    res.status(503).end();
    return;
  }

  const filterQuery = {
    blogId: id,
  };

  const existing = await collections.blogViewCounts.findOne(filterQuery);

  if (existing) {
    collections.blogViewCounts.updateOne(filterQuery, {
      $inc: {
        count: 1,
      },
    });
    res.send(existing.count + 1);
    res.end();
  } else {
    collections.blogViewCounts.insertOne({
      blogId: id,
      count: 1,
    });
    res.send(1);
    res.end();
  }
};

export default handler;

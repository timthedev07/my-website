import { NextApiHandler } from "next";
import { collections, connectDB } from "../../../mongodb";
import { withMethodValidation } from "next-method-validation";

const handler: NextApiHandler = async (req, res) => {
  await connectDB();

  const id = req.query.blogId;

  if (!collections.blogViewCounts) {
    res.status(503).end();
    return;
  }

  try {
    const dbRes = await collections.blogViewCounts.findOne({
      blogId: id,
    });
    if (dbRes) {
      res.status(200).send(dbRes.count);
      res.end();
    } else {
      res.status(503).end();
    }
  } catch (err) {
    res.status(503).end();
  }
};

export default withMethodValidation(handler, "GET");

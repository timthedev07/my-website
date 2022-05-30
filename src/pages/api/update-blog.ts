import { NextApiHandler } from "next";
import { BlogUpdate } from "../../types/blogUpdate";
import { updateBlog } from "../../utils/GHRest";

const handler: NextApiHandler = async (req, res) => {
  const data = JSON.parse(req.body) as BlogUpdate;

  try {
    await updateBlog(data.categoryAndSlug, data.newContent);
    res.status(204).end();
  } catch (err) {
    res.status(503).send(err);
  }
};

export default handler;
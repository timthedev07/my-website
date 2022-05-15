import { NextApiHandler } from "next";
import { withMethodGuard } from "../../../lib/middlewares/methodGuard";
import { getComments } from "../../../mongodb/functions/getComments";

const handler: NextApiHandler = async (req, res) => {
  try {
    const comments = await getComments(req.query.id as string);
    res.status(200).send(comments);
  } catch (errStatus) {
    res.status(errStatus as number).end();
  }
};

export default withMethodGuard(handler, "GET");

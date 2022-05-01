import { NextApiHandler } from "next";
import { getComments } from "../../../mongodb/functions/getComments";

const handler: NextApiHandler = async (req, res) => {
  try {
    console.log(req.query.id);
    const comments = await getComments(req.query.id as string);
    res.status(200).send(comments);
  } catch (errStatus) {
    res.status(errStatus as number).end();
  }
};

export default handler;

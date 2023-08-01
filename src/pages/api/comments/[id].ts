import { NextApiHandler } from "next";
import { withMethodValidation } from "next-method-validation";
import { getComments } from "../../../mongodb/functions/getComments";

const handler: NextApiHandler = async (req, res) => {
  try {
    const comments = await getComments(req.query.id as string);
    res.status(200).send(comments);
    res.end();
  } catch (errStatus) {
    res.status(errStatus as number).end();
  }
};

export default withMethodValidation(handler, "GET");

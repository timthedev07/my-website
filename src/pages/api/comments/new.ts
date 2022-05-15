import { NextApiHandler } from "next";
import { BlogFormData } from "../../../components/CommentForm";
import { withAuth } from "../../../lib/middlewares/authRoute";
import { withMethodGuard } from "../../../lib/middlewares/methodGuard";
import { newComment } from "../../../mongodb/functions/newComment";

const handler: NextApiHandler = async (req, res) => {
  const formData: BlogFormData = JSON.parse(req.body);

  formData.commenterName = formData.commenterName.split(" ")[0];

  try {
    await newComment(formData);
    res.status(201).end();
  } catch (errStatusCode) {
    res.status(errStatusCode as number).end();
  }
};

export default withMethodGuard(withAuth(handler), "POST");

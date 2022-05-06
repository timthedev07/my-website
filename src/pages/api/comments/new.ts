import { NextApiHandler } from "next";
import { BlogFormData } from "../../../components/CommentForm";
import { newComment } from "../../../mongodb/functions/newComment";

const handler: NextApiHandler = async (req, res) => {
  if (req.method?.toUpperCase() !== "POST") {
    res.status(405).end();
  }

  const formData: BlogFormData = JSON.parse(req.body);

  try {
    await newComment(formData);
    res.status(201).end();
  } catch (errStatusCode) {
    res.status(errStatusCode as number).end();
  }
};

export default handler;

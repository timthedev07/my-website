import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { BlogFormData } from "../../../components/CommentForm";
import { newComment } from "../../../mongodb/functions/newComment";

const handler: NextApiHandler = async (req, res) => {
  const session = await getSession({ req });

  if (req.method?.toUpperCase() !== "POST") {
    res.status(405).end();
  }

  if (!session?.user) {
    res.status(401).end();
    return;
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

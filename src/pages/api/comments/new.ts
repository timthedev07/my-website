import { NextApiHandler } from "next";
import { newComment } from "../../../mongodb/functions/newComment";
import { BlogComment } from "../../../mongodb/models/BlogComment";

const handler: NextApiHandler = async (req, res) => {
  if (req.method?.toUpperCase() !== "POST") {
    res.status(405).end();
  }

  const formData: BlogComment = JSON.parse(req.body);

  try {
    await newComment(formData);
    res.status(201).end();
  } catch (errStatusCode) {
    res.status(errStatusCode as number).end();
  }
};

export default handler;

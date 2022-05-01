import { collections, connectDB } from "..";
import { BlogComment } from "../models/BlogComment";

export const newComment = async (commentData: BlogComment) => {
  await connectDB();

  const commentsCollection = collections.blogComments;

  if (!commentsCollection) {
    throw 503;
  }

  await commentsCollection.insertOne(commentData);
};

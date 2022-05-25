import { collections, connectDB } from "..";
import { BlogFormData } from "../../components/CommentForm";

export const newComment = async (commentData: BlogFormData) => {
  await connectDB();

  const commentsCollection = collections.blogComments;

  if (!commentsCollection) {
    throw 503;
  }

  await commentsCollection.insertOne({
    timestamp: new Date() as any,
    ...commentData,
  });
};

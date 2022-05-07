import { collections, connectDB } from "..";
import { BlogFormData } from "../../components/CommentForm";
import { hasNoAlphanumeric } from "../../utils/regex";

export const newComment = async (commentData: BlogFormData) => {
  await connectDB();

  const commentsCollection = collections.blogComments;

  if (!commentsCollection) {
    throw 503;
  }

  const isAnonymous =
    commentData.commenterName === "" ||
    hasNoAlphanumeric(commentData.commenterName);

  await commentsCollection.insertOne({
    timestamp: new Date() as any,
    ...commentData,
    isAnonymous,
    commenterName: isAnonymous
      ? "Anonymous Visitor"
      : commentData.commenterName,
  });
};

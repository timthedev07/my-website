import { collections, connectDB } from "..";
import { BlogFormData } from "../../components/CommentForm";
import { hasNoAlphanumeric } from "../../utils/regex";

export const newComment = async (commentData: BlogFormData) => {
  await connectDB();

  const commentsCollection = collections.blogComments;

  if (!commentsCollection) {
    throw 503;
  }

  await commentsCollection.insertOne({
    ...commentData,
    commenterName:
      commentData.commenterName === "" ||
      hasNoAlphanumeric(commentData.commenterName)
        ? "Anonymous Visitor"
        : commentData.commenterName,
  });
};

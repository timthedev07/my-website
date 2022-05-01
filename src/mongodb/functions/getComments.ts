import { collections, connectDB } from "../index";

export const getComments = async (blogId: string) => {
  await connectDB();

  if (!collections.blogComments) {
    throw 503;
  }

  return await collections.blogComments.find({ blogId }).toArray();
};

import * as mongoDB from "mongodb";
import { BlogComment } from "./models/BlogComment";
export const collections: { blogComments?: mongoDB.Collection<BlogComment> } =
  {};

export const connectDB = async () => {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const blogCommentsCollection: mongoDB.Collection = db.collection(
    process.env.DB_COLLECTION_NAME
  );

  collections.blogComments = blogCommentsCollection as any;

  console.log(
    `Access to collection "${blogCommentsCollection.collectionName}" granted.`
  );
};

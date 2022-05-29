import * as mongoDB from "mongodb";
import { BlogComment } from "./models/BlogComment";
import { BlogViewCount } from "./models/BlogViewCount";
export const collections: {
  blogComments?: mongoDB.Collection<BlogComment>;
  blogViewCounts?: mongoDB.Collection<BlogViewCount>;
} = {};

export const connectDB = async () => {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const blogCommentsCollection: mongoDB.Collection =
    db.collection("blog_comments");
  const blogViewCountsCollection: mongoDB.Collection =
    db.collection("blog_view_counts");

  collections.blogComments = blogCommentsCollection as any;
  collections.blogViewCounts = blogViewCountsCollection as any;

  console.log(
    `Access to collections "${blogCommentsCollection.collectionName}", "${blogViewCountsCollection.collectionName}" granted.`
  );
};

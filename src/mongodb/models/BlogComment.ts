import { ObjectId } from "mongodb";

export class BlogComment {
  constructor(
    public commenterName: string,
    public comment: string,
    public blogId: string,
    public isAnonymous: boolean,
    public timestamp: Date,
    public id?: ObjectId
  ) {}
}

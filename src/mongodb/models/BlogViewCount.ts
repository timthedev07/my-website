import { ObjectId } from "mongodb";

export class BlogComment {
  constructor(
    public blogId: string,
    public count: number,
    public id?: ObjectId
  ) {}
}

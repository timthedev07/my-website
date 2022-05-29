import { ObjectId } from "mongodb";

export class BlogViewCount {
  constructor(
    public blogId: string,
    public count: number,
    public id?: ObjectId
  ) {}
}

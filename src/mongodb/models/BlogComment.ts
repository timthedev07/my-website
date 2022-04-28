import { ObjectId } from "mongodb";

export class BlogComment {
  constructor(
    public commentedName: string,
    public comment: string,
    public blogId: string,
    public id?: ObjectId
  ) {}
}

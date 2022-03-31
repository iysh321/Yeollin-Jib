import { injectable } from "inversify";
import "reflect-metadata";
import comment from "../models/comment";

@injectable()
export class CommentData {
  async findAllOnlyCommentIdByUserId<T>(userId: T) {
    return await comment.findAll({
      where: { userId },
      attributes: ["id"],
    });
  }
}

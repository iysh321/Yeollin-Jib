import { injectable } from "inversify";
import "reflect-metadata";
import category from "../models/category";

@injectable()
export class CategoryData {
  async findCategory(
    category1: number,
    category2: number,
  ): Promise<category | null> {
    return category.findOne({
      where: { category1: category1, category2: category2 },
    });
  }

  async findCategory1Code(category1: number): Promise<category[]> {
    return category.findAll({
      where: { category1: category1 },
    });
  }
}

import { CategoryListService } from "../services/CategoryService.js";


export const ProductCategoryList = async (req, res) => {
  const result = await CategoryListService();
  res.status(200).json(result);
};


import CategoryModel from "../models/CategoryModel.js";

export const CategoryListService = async () => {
  try {
    const data = await CategoryModel.find();
    return { status: "success", data };
  } catch (e) {
    return { status: "fail", error: e.message };
  }
};

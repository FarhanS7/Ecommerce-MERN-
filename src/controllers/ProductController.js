// src/controllers/ProductController.js
import {
  BrandListService,
  CategoryListService,
  CreateReviewService,
  DetailsService,
  ListByBrandService,
  ListByCategoryService,
  ListByKeywordService,
  ListByRemarkService,
  ListBySimilarService,
  ReviewListService,
  SliderListService,
} from "../services/ProductServices.js";

export const ProductBrandList = async (req, res) => {
  const result = await BrandListService();
  res.status(200).json(result);
};

export const ProductCategoryList = async (req, res) => {
  const result = await CategoryListService();
  res.status(200).json(result);
};

export const ProductSliderList = async (req, res) => {
  const result = await SliderListService();
  res.status(200).json(result);
};

export const ProductListByBrand = async (req, res) => {
  const { brandID } = req.query;
  const result = await ListByBrandService(brandID);
  res.status(200).json(result);
};

export const ProductListByCategory = async (req, res) => {
  const { categoryID } = req.query;
  const result = await ListByCategoryService(categoryID);
  res.status(200).json(result);
};

export const ProductListByRemark = async (req, res) => {
  const { remark } = req.query;
  const result = await ListByRemarkService(remark);
  res.status(200).json(result);
};

export const ProductListBySimilar = async (req, res) => {
  const { categoryID } = req.query;
  const result = await ListBySimilarService(categoryID);
  res.status(200).json(result);
};

export const ProductDetails = async (req, res) => {
  const { productID } = req.query;
  const result = await DetailsService(productID);
  res.status(200).json(result);
};

export const ProductListByKeyword = async (req, res) => {
  const { keyword } = req.query;
  const result = await ListByKeywordService(keyword);
  res.status(200).json(result);
};

export const ProductReviewList = async (req, res) => {
  const { productID } = req.query;
  const result = await ReviewListService(productID);
  res.status(200).json(result);
};
export const CreateReview = async (req, res) => {
  let result = await CreateReviewService(req);
  return res.status(200).json(result);
};

export const ProductListByFilter = async (req, res) => {
  let result = await ListByFilterService(req);
  return res.status(200).json(result);
};

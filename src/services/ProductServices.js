const BrandModel = require("../models/BrandModel");
const CategoryModel = require("../models/CategoryModel");
const ProductSliderModel = require("../models/ProductSliderModel");
const ProductModel = require("../models/ProductModel");
const ReviewModel = require("../models/ReviewModel");
const ProductDetailModel = require("../models/ProductDetailModel");

const BrandListService = async (req, res) => {};
const CategoryListService = async (req, res) => {};
const SliderListService = async (req, res) => {};
const ListByBrandService = async (req, res) => {};
const ListByCategoryService = async (req, res) => {};
const ListByRemarkService = async (req, res) => {};
const ListBySimilarService = async (req, res) => {};
const DetailsService = async (req, res) => {};
const ListByKeywordService = async (req, res) => {};
const ReviewListService = async (req, res) => {};
const CreateReviewService = async (req, res) => {};
const ListByFilterService = async (req, res) => {};

module.exports = {
  BrandListService,
  CategoryListService,
  SliderListService,
  ListByBrandService,
  ListByCategoryService,
  ListByRemarkService,
  ListBySimilarService,
  DetailsService,
  ListByKeywordService,
  ReviewListService,
  CreateReviewService,
  ListByFilterService,
};

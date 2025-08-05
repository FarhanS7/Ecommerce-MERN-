const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

//Products API
router.get("/ProductBrandList", ProductController.ProductBrandList);
router.get("/ProductCategoryList", ProductController.ProductCategoryList);
router.get("/ProductSliderList", ProductController.ProductSliderList);
router.get("/ProductListByCategory", ProductController.ProductListByCategory);
router.get("/ProductListBySimilar", ProductController.ProductListBySimilar);
router.get("/ProductListByKeyword", ProductController.ProductListByKeyword);
router.get("/ProductListByRemark", ProductController.ProductListByRemark);
router.get("/ProductReviewList", ProductController.ProductReviewList);
router.get("/ProductDetails", ProductController.ProductDetails);
router.get("/CreateProductReview", ProductController.CreateProductReview);

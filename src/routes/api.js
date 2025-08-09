// src/routes/api.js
import express from "express";
// import {
//   ProductBrandList,
//   ProductCategoryList,
//   ProductDetails,
//   ProductListByBrand,
//   ProductListByCategory,
//   ProductListByFilter,
//   ProductListByKeyword,
//   ProductListByRemark,
//   ProductListBySimilar,
//   ProductReviewList,
//   ProductSliderList,
// } from "../controllers/ProductController.js";
import * as ProductController from "../controllers/ProductController";

const router = express.Router();

//Product
// router.get("/ProductBrandList", ProductBrandList);
router.get("/ProductBrandList", ProductController.ProductList);
router.get("/ProductCategoryList", ProductCategoryList);
router.get("/ProductSliderList", ProductSliderList);
router.get("/ProductListByBrand", ProductListByBrand);
router.get("/ProductListByBrand/:BrandId", ProductListByBrand);
router.get("/ProductListByCategory/:CategoryID", ProductListByCategory);
router.get("/ProductListBySimilar/:CategoryID", ProductListBySimilar);
router.get("/ProductListByKeyword/:keyword", ProductListByKeyword);
router.get("/ProductListByRemark/:Remark", ProductListByRemark);
router.get("/ProductReviewList/:ProductID", ProductReviewList);
router.get("/ProductDetails/:ProductID", ProductDetails);

router.post("/ProductListByFilter", ProductListByFilter);

//User
router.get("/UserOTP/:email", UserController.UserOTP);
router.get("/VerifyLogin/:email/:otp", UserController.VerifyLogin);
router.get("/UserLogout", AuthVerification, UserController.UserLogout);
router.post("/CreateProfile", AuthVerification, UserController.CreateProfile);
router.post("/UpdateProfile", AuthVerification, UserController.UpdateProfile);
router.get("/ReadProfile", AuthVerification, UserController.ReadProfile);

export default router;

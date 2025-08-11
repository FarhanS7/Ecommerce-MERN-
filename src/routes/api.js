import express from "express";

// Import controllers with .js extensions (required for ES modules)
import * as BrandController from "../controllers/BrandListController.js";
import * as CategoryController from "../controllers/CategoryController.js";
import * as ProductController from "../controllers/ProductController.js";
import * as UserController from "../controllers/UserController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
const router = express.Router();

//  Brand Routes
router.get("/ProductBrandList", BrandController.ProductBrandList);
router.get("/ProductListByBrand/:BrandID", BrandController.ProductListByBrand);

//Category Routes
router.get("/ProductCategoryList", CategoryController.ProductCategoryList);

//Products Routes
router.get("/ProductSliderList", ProductController.ProductSliderList);
router.get(
  "/ProductListByCategory/:categoryID",
  ProductController.ProductListByCategory
);
router.get("/ProductListBySimilar", ProductController.ProductListBySimilar);
router.get("/ProductDetails/:ProductID", ProductController.ProductDetails);
router.get(
  "/ProductListByKeyword/:Keyword",
  ProductController.ProductListByKeyword
);
router.get(
  "/ProductReviewList/:ProductID",
  ProductController.ProductReviewList
);

//USERS
router.post("/Login", UserController.Login);
router.post("/VerifyLogin", UserController.VerifyLogin);
router.post(
  "/CreateUserProfile",
  AuthMiddleware,
  UserController.CreateUserProfile
);
router.post(
  "/UpdateUserProfile",
  AuthMiddleware,
  UserController.UpdateUserProfile
);
router.get("/ReadUserProfile", AuthMiddleware, UserController.ReadUserProfile);

export default router;

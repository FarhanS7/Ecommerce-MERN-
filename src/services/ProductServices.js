import BrandModel from "../models/BrandModel.js";
import ProductModel from "../models/ProductModel.js";
import ProductSliderModel from "../models/ProductSliderModel.js";
import ReviewModel from "../models/ReviewModel.js";



export const SliderListService = async () => {
  try {
    const data = await ProductSliderModel.find();
    return { status: "success", data };
  } catch (e) {
    return { status: "fail", error: e.message };
  }
};



export const ListByCategoryService = async (categoryID) => {
  try {
    let CategoryID = new ObjectId(req.params.CategoryID);
    let MatchStage = { $match: { categoryID: CategoryID } };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

export const ListByRemarkService = async (remark) => {
  try {
    let Remark = req.params.Remark;
    let MatchStage = { $match: { remark: Remark } };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

export const ListBySimilarService = async (categoryID) => {
  try {
    let CategoryID = new ObjectId(req.params.CategoryID);
    let MatchStage = { $match: { categoryID: CategoryID } };
    let limitStage = { $limit: 20 };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      limitStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

export const DetailsService = async (req) => {
  try {
    let ProductID = new ObjectId(req.params.ProductID);
    let MatchStage = { $match: { _id: ProductID } };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let JoinWithDetailsStage = {
      $lookup: {
        from: "productdetails",
        localField: "_id",
        foreignField: "productID",
        as: "details",
      },
    };

    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let UnwindDetailsStage = { $unwind: "$details" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      JoinWithDetailsStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      UnwindDetailsStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

export const ListByKeywordService = async (keyword) => {
  try {
    let SearchRegex = { $regex: req.params.Keyword, $options: "i" };
    let SearchParams = [{ title: SearchRegex }, { shortDes: SearchRegex }];
    let SearchQuery = { $or: SearchParams };

    let MatchStage = { $match: SearchQuery };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

export const ReviewListService = async (productID) => {
  try {
    let ProductID = new ObjectId(req.params.ProductID);
    let MatchStage = { $match: { productID: ProductID } };

    let JoinWithProfileStage = {
      $lookup: {
        from: "profiles",
        localField: "userID",
        foreignField: "userID",
        as: "profile",
      },
    };
    let UnwindProfileStage = { $unwind: "$profile" };
    let ProjectionStage = {
      $project: { des: 1, rating: 1, "profile.cus_name": 1 },
    };

    let data = await ReviewModel.aggregate([
      MatchStage,
      JoinWithProfileStage,
      UnwindProfileStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

export const CreateReviewService = async (reviewData) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    let data = await ReviewModel.create({
      productID: reqBody["productID"],
      userID: user_id,
      des: reqBody["des"],
      rating: reqBody["rating"],
    });
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e.toString() };
  }
};

export const ListByFilterService = async (req) => {
  try {
    let matchConditions = {};
    if (req.body["categoryID"]) {
      matchConditions.categoryID = new ObjectId(req.body["categoryID"]);
    }
    if (req.body["brandID"]) {
      matchConditions.brandID = new ObjectId(req.body["brandID"]);
    }
    let MatchStage = { $match: matchConditions };

    let AddFieldsStage = {
      $addFields: { numericPrice: { $toInt: "$price" } },
    };
    let priceMin = parseInt(req.body["priceMin"]);
    let priceMax = parseInt(req.body["priceMax"]);
    let PriceMatchConditions = {};
    if (!isNaN(priceMin)) {
      PriceMatchConditions["numericPrice"] = { $gte: priceMin };
    }
    if (!isNaN(priceMax)) {
      PriceMatchConditions["numericPrice"] = {
        ...(PriceMatchConditions["numericPrice"] || {}),
        $lte: priceMax,
      };
    }
    let PriceMatchStage = { $match: PriceMatchConditions };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      AddFieldsStage,
      PriceMatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

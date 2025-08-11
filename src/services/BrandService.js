import BrandModel from "../models/BrandModel.js";
import ProductModel from "../models/ProductModel.js";

export const BrandListService = async () => {
  try {
    const data = await BrandModel.find();
    return { status: "success", data };
  } catch (e) {
    return { status: "fail", error: e.message };
  }
};

export const ListByBrandService = async (req) => {
  try {
    let BrandID = new ObjectId(req.params.BrandID);

    let MatchStage = { $match: { brandID: BrandID } };

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

    // Query
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

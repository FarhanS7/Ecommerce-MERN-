import {
  BrandListService,
  ListByBrandService,
} from "../services/BrandService.js";

export const ProductBrandList = async (req, res) => {
  const result = await BrandListService();
  res.status(200).json(result);
};
export const ProductListByBrand = async (req, res) => {
  const { brandID } = req.query;
  const result = await ListByBrandService(brandID);
  res.status(200).json(result);
};

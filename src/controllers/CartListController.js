import {
  CreateCartService,
  ReadCartService,
} from "../services/CartListServices.js";

export const CreateCart = async (req, res) => {
  let result = await CreateCartService(req);
  return res.json(result);
};
export const ReadCartList = async (req, res) => {
  let result = await ReadCartService(req);
  return res.json(result);
};
export const RemoveCart = async () => {};
export const UpdateCart = async () => {};

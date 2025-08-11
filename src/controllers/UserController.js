// src/controllers/UserController.js

import {
  CreateUserProfileService,
  LogInService,
  ReadUserProfileService,
  UpdateUserProfileService,
  VerifyLogInService,
} from "../services/UserServices.js";

export const Login = async (req, res) => {
  let result = await LogInService(req);
  return res.json(result);
};

export const VerifyLogin = async (req, res) => {
  let result = await VerifyLogInService(req);
  return res.json(result);
};

export const CreateUserProfile = async (req, res) => {
  let result = await CreateUserProfileService(req);
  return res.json(result);
};

export const UpdateUserProfile = async (req, res) => {
  let result = await UpdateUserProfileService(req);
  return res.json(result);
};

export const ReadUserProfile = async (req, res) => {
  let result = await ReadUserProfileService(req);
  return res.json(result);
};

// src/service/UserService.js

import ProfileModel from "../models/ProfileModel.js";
import UserModel from "../models/UserModel.js";
import { TokenEncode } from "../utility/tokenUtility.js";

// Log in service
export const LogInService = async (req) => {
  try {
    let { email } = req.body;
    let code = Math.floor(100000 + Math.random() * 900000).toString();
    await UserModel.updateOne(
      { email },
      { $set: { otp: code } },
      { upsert: true }
    );
    return { status: "success", message: "6 Digit Code Sent Successfully" };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

// OTP verification
export const VerifyLogInService = async (req) => {
  try {
    let { email, otp } = req.body;
    otp = otp.toString();
    let user = await UserModel.findOne({ email, otp });
    if (user) {
      let token = TokenEncode(email, user._id.toString());
      await UserModel.updateOne({ email }, { $set: { otp: "0" } });
      return { status: "success", message: "Valid OTP", token };
    }
    return { status: "fail", message: "Invalid OTP" };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

// Create or update profile
export const CreateUserProfileService = async (req) => {
  try {
    let userID = req.headers.user_id;
    let reqBody = { ...req.body, userID };
    await ProfileModel.updateOne(
      { userID },
      { $set: reqBody },
      { upsert: true }
    );
    return { status: "success", message: "Profile Save Success" };
  } catch {
    return { status: "fail", message: "Something Went Wrong" };
  }
};

export const UpdateUserProfileService = CreateUserProfileService;

// Read profile
export const ReadUserProfileService = async (req) => {
  try {
    let userID = req.headers.user_id;
    let data = await ProfileModel.findOne({ userID });
    return { status: "success", message: "Profile Read Success", data };
  } catch {
    return { status: "fail", message: "Something Went Wrong" };
  }
};

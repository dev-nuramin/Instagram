// import neccery module
import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import createError from "../createError.js";


export const userLogin = async (req, res, next) => {
  try {
   
    // check if user exist
    const login_user = await User.findOne({ email : req.body.email});

    if (!login_user) {
      return next(createError(404, "User not found"));
    }

    // user password macth
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      login_user.password
    );
    if (!isPasswordCorrect) {
      return next(createError(400, "Invalid password"));
    }

    // create token
    const token = jwt.sign(
      { id: login_user._id, isAdmin: login_user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "5d" }
    );

    // remove password from user object
    const { password, isAdmin, ...user } = login_user._doc;
    res.cookie("access_token", token).status(200).json({
      token: token,
      user: user
    });
  } catch (error) {
    next(error)
  }
};





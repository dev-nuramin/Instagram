/**
 * @file userControllers.js
 * @description This file contains the controller functions for handling student-related requests.
 * It includes functions for creating, updating, deleting, and retrieving student records.
 * @author [Dev-Nuramin]
 * @date [2025-05-15]
 *
 */

// Import necessary modules
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import createError from "../controllers/createError.js";
import jwt from "jsonwebtoken";
/**
 * @function getAllUser
 * @description Retrieves all user records from the database.
 * @Methood GET
 * @route /api/user
 */

export const getAllUsers = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

/**
 * @function createUser
 * @description Creates a new user record in the database.
 * @Methood POST
 * @route /api/user
 */

export const createUser = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(req.body.password, salt);
    const user = await User.create({
      ...req.body,
      password: hash_pass,
    });
    res.status(201).json({
      status: "success",
      user,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @function getSingleUser
 * @description Retrieves a single user record from the database.
 * @Methood GET
 * @route /api/user/:id
 *
 */

export const getSingleUser = async (req, res, next) => {
  try {
    // Extract the user ID from the request parameters
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      next(createError(404, "Single user not found"));
      return;
    }
    if (user) {
      res.status(200).json({
        status: "success",
        user,
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @function deleteUser
 * @description delete a specify user from database
 * @Methood delete
 * @route /api/user:id
 */

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.status(200).json(
      {
        status: "success",
        message: "User deleted successfully",
      },
      user
    );
  } catch (error) {
    next(error);
  }
};

/**
 * @function putUser
 * @description update a specify user from database
 * @Methood put
 * @route /api/user:id
 */

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @function patchUser
 * @description update a specify user from database
 * @Methood patch
 * @route /api/user:id
 */

export const patchUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @function getMe
 * @description login secure specify user from database
 * @Methood get
 * @route /api/user/me
 */
export const measUser = async (req, res, next) => {
  const bearer_token = req.headers.authorization;
  let token = "";
  try {
    if (bearer_token) {
      token = bearer_token.split(" ")[1];
    }

    // verify token
    const logged_in_user = jwt.verify(token, process.env.JWT_SECRET);

    // check user
    if (!logged_in_user) {
      next(createError(400, "token not valid"));
    }

    // final
    if (logged_in_user) {
      const user = await User.findById(logged_in_user.id);
      res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
};

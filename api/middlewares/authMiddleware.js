// create auth middleware for check user
import jwt from "jsonwebtoken";
import createError from "../controllers/createError.js";

export const authMiddleware = (req, res, next) => {
  // check token
  const token = req.cookies.access_token;

  // check if token is valid
  if (!token) {
    return next(createError(401, "You are not authorized"));
  }

  // verify token
  const login_user = jwt.verify(token, process.env.JWT_SECRET);
  if (!login_user) {
    return next(createError(401, "Invalid token"));
  }

  if (login_user) {
    req.user = login_user;
    next();
  }
};

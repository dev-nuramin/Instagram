// create user middleware

// create auth middleware for check user
import jwt from "jsonwebtoken";
import createError from "../controllers/createError.js";

export const userMiddleware = (req, res, next) => {
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

  // create user permission
  const isUser = login_user.id === req.params.id;


  if(!isUser){
    return next(createError(403, "You are not allowed to access this route"));
  }
  if (login_user) {
    req.user = login_user;
    next();
  }
};

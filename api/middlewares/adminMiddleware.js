//create admin middlewares

// create auth middleware for check user
import jwt from "jsonwebtoken";
import createError from "../controllers/createError.js";

const adminMiddleware = (req, res, next) => {
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

  // check if admin or not
 
  if(!login_user.isAdmin){
     return next(createError(403, "Only admin can access this feature"))
  }

  if (login_user.isAdmin) {
    req.user = login_user;
    next();
  }
};


// exporting module

export default adminMiddleware;
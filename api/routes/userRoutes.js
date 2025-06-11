// init routes

import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  patchUser,
} from "../controllers/userControllers.js";
import { userLogin } from "../controllers/userLogin/userLogin.js";
import { userRegister } from "../controllers/userLogin/userRegister.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { userMiddleware } from "../middlewares/userMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";


const router = express.Router();

router.route("/").get(adminMiddleware, getAllUsers).post(authMiddleware, createUser);
router
  .route("/:id")
  .get(userMiddleware, getSingleUser)
  .put(userMiddleware, updateUser)
  .delete(userMiddleware, deleteUser)
  .patch(userMiddleware, patchUser);


  // user login and registaer route
  router.route('/login').post(userLogin)
  router.route('/register').post(userRegister)

export default router;

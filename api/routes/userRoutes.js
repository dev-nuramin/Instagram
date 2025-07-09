// init routes

import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  patchUser,
  measUser
} from "../controllers/userControllers.js";
import { userLogin } from "../controllers/userLogin/userLogin.js";
import { userRegister } from "../controllers/userLogin/userRegister.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { userMiddleware } from "../middlewares/userMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";
import { verifyAccount } from "../controllers/userLogin/verifyAccount.js";


const router = express.Router();


 // user login and registaer route
   
  router.route('/login').post(userLogin)
  router.route('/register').post(userRegister)
  router.route('/me').get(measUser)
  router.route('/verify').post(verifyAccount)


router.route("/").get(adminMiddleware, getAllUsers).post(authMiddleware, createUser);
router
  .route("/:id")
  .get(userMiddleware, getSingleUser)
  .put(userMiddleware, updateUser)
  .delete(userMiddleware, deleteUser)
  .patch(userMiddleware, patchUser);


 
export default router;

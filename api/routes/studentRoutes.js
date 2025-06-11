// init routes

import express from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getSingleStudent,
  patchStudent,
  updateStudent,
} from "../controllers/studentControllers.js";

const router = express.Router();

router.route("/").get(getAllStudents).post(createStudent);
router
  .route("/:id")
  .get(getSingleStudent)
  .put(updateStudent)
  .delete(deleteStudent)
  .patch(patchStudent);

export default router;

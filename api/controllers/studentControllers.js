/**
 * @file studentControllers.js
 * @description This file contains the controller functions for handling student-related requests.
 * It includes functions for creating, updating, deleting, and retrieving student records.
 * @author [Dev-Nuramin]
 * @date [2025-05-15]
 *
 */

// Import necessary modules
import Student from "../models/Student.js";
import bcrypt from "bcryptjs";
import createError from '../controllers/createError.js'
/**
 * @function getAllStudent
 * @description Retrieves all student records from the database.
 * @Methood GET
 * @route /api/students
 */

export const getAllStudents = async (req, res, next) => {
  try {
    const student = await Student.find();
    res.status(200).json(student);
  } catch (error) {
    next(error);
  }
};

/**
 * @function createStudent
 * @description Creates a new student record in the database.
 * @Methood POST
 * @route /api/students
 */

export const createStudent = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(req.body.password, salt);
    const student = await Student.create({
      ...req.body,
      password: hash_pass,
    });
    res.status(201).json({
      status: "success",
      student,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @function getSingleStudent
 * @description Retrieves a single student record from the database.
 * @Methood GET
 * @route /api/students/:id
 *
 */

export const getSingleStudent = async (req, res, next) => {
  try {
    // Extract the student ID from the request parameters
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) {
      next(createError(404, "Single student not found"));
      return;
    }
    if (student) {
      res.status(200).json({
        status: "success",
        student,
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @function deleteStudent
 * @description delete a specify student from database
 * @Methood delete
 * @route /api/students:id
 */

export const deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);
    res.status(200).json(
      {
        status: "success",
        message: "Student deleted successfully",
      },
      student
    );
  } catch (error) {
    next(error);
  }
};

/**
 * @function putStudent
 * @description update a specify student from database
 * @Methood put
 * @route /api/students:id
 */

export const updateStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      student,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @function patchStudent
 * @description update a specify student from database
 * @Methood patch
 * @route /api/students:id
 */

export const patchStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      student,
    });
  } catch (error) {
    next(error);
  }
};

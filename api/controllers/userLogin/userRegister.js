import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import createError from "../createError.js";
import sendEmail from "../../utils/sendEmail.js";
/**
 * User registration controller
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */

export const userRegister = async (req, res, next) => {
  try {
    // Check if user already exists
    const existingUser = await User.find({ email: req.body.email });
    if (existingUser.length > 0) {
      return next(createError(400, "User already exists"));
    }
    if (req.body.password.length < 6) {
      return next(
        createError(400, "Password must be at least 6 characters long")
      );
    }
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // Create a new user
    const newUser = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    });

   
    // Save the user to the database
    const savedUser = await newUser.save();

     const user = savedUser;
    // send email
    sendEmail(
      user.email,
      "Instagram",
      `<span>Hi ${user.fullName} you are welcome to instagram</span>`
    );

    console.log(user);
    res.status(201).json({
      message: "User registered successfully",
      user: user,
    });
  } catch (error) {
    console.log(error)
  }
};

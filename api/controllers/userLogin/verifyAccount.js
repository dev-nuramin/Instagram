import Token from "../../models/Token.js";
import User from "../../models/User.js";
import createError from "../createError.js";
// import Token from '../../models/Token.js';

export const verifyAccount = async (req, res, next) => {
  try {
    const { id, token } = req.body;

    //Check if the token exists
    const verify = await Token.findOne({ userId: id, token: token });

    if (!verify) {
      next(createError(404, "Invalid or expired token"));
      return;
    }

    // update the user account to verified
    if (verify) {
      await User.findByIdAndUpdate(id, { isVerified: true });
      // delete the token after verification
      await Token.deleteOne({ userId: id, token });
      res.status(200).json({
        message: "Account verified successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};

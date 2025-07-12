import bcrypt from "bcryptjs";

// This file contains a utility function to hash passwords using bcrypt.
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash_pass = await bcrypt.hash(password, salt);
  return hash_pass;
};
export default hashPassword;

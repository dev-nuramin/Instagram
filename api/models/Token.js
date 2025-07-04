import mongoose, { Schema } from "mongoose"; // Properly import mongoose

// create user schema
const tokenSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// export schema
export default mongoose.model("Token", tokenSchema);

import mongoose, { Schema } from "mongoose"; // Properly import mongoose

// create user schema
const tokenSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    token: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// export schema
export default mongoose.model("Token", tokenSchema);

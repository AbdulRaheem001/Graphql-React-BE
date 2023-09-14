import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
  {
    FName: {
      type: String,
      trim: true,
      required: [true, "Please add Your Name"],
    },
    LName: {
      type: String,
      trim: true,
      required: [true, "Please add Your Name"],
    },
    Email: {
      type: String,
      trim: true,
      required: [true, "Please Add Your Email"],
    },
   
    Password: {
      type: String,
      required: [true, "Please Add Password"],
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("UsersTODO", UsersSchema);


// // Api Key AIzaSyBpzDLExdP4xEOC1rGYCur4LWQuVlXkhKg


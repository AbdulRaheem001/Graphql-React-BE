import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
  {
    Email: {
      type: String,
      trim: true,
      required: [true, "Please add Your Email"],
    },
    Title: {
      type: String,
      trim: true,
      required: [true, "Please add Title"],
    },
    Description: {
      type: String,
      trim: true,
      required: [true, "Please add Your Description"],
    },
    Completed: {
      type: Boolean,
      trim: true,
      
    },
   
    Urgency: {
      type: String,
      required: [true, "Please Add Urgency"],
    },
    CompletedOn: {
        type: Date,
      },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("TODO", UsersSchema);


// // Api Key AIzaSyBpzDLExdP4xEOC1rGYCur4LWQuVlXkhKg


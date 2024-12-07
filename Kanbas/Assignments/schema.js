import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
    {
      title: String,
      description: String ,
      points: Number,
      dueDate: Date,
      availableFrom: Date,
      availableUntil: Date,
      submissionType: String,
      onlineEntryOptions: Object,
      course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    },
    { collection: "assignments" }
  );
  
  export default assignmentSchema;
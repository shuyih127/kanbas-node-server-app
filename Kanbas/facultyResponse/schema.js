import mongoose from "mongoose";

const facultyResponseSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel", required: true },
  responses: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: "QuestionModel", required: true },
      answer: String,
    },
  ],
  score: { type: Number, default: 0 },
  lastAttempted: { type: Date, default: Date.now },
}, { collection: "facultyResponses" });

export default facultyResponseSchema;
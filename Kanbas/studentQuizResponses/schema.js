import mongoose from "mongoose";

const studentResponseSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel", required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel", required: true },
  responses: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: "QuestionModel", required: true },
      answer: String,
    },
  ],
  score: { type: Number, default: 0 },
  attemptNumber: { type: Number, required: true },
  lastAttempted: { type: Date, default: Date.now },
}, { collection: "studentResponses" });

export default studentResponseSchema
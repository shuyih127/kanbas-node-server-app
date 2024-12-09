import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel", required: true },
  type: { 
    type: String, 
    enum: ["Multiple Choice", "True/False", "Fill in the Blank"], 
    required: true 
  },
  title: { type: String, required: true },
  points: { type: Number, default: 1 },
  questionText: { type: String, required: true },
  choices: [
    {
      text: { type: String },
      isCorrect: { type: Boolean, default: false },
    },
  ],
  correctAnswers: [String], 
}, { collection: "questions" });

export default questionSchema;
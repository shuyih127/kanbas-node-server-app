import StudentResponseModel from "./model.js";

export const saveStudentResponse = async (quizId, studentId, responses, score, attemptNumber) => {
  return StudentResponseModel.findOneAndUpdate(
    { quizId, studentId, attemptNumber },
    { responses, score, lastAttempted: new Date() },
    { upsert: true, new: true }
  );
};

export const getStudentResponse = async (quizId, studentId) => {
  return StudentResponseModel.findOne({ quizId, studentId }).sort({ attemptNumber: -1 });
};

export const getStudentResponsesByQuiz = async (quizId) => {
  return StudentResponseModel.find({ quizId });
};
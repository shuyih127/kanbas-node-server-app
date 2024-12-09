import model from "./model.js";

export const saveFacultyResponse = async (quizId, userId, responses, score) => {
  return model.findOneAndUpdate(
    { quizId, userId },
    { responses, score, lastAttempted: new Date() },
    { upsert: true, new: true }
  );
};

export const getFacultyResponse = async (quizId, userId) => {
  return model.findOne({ quizId, userId });
};
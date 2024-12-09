import model from "./model.js";

export function createQuestion(question) {
  return model.create(question);
}

export function findQuestionsByQuiz(quizId) {
  return model.find({ quizId });
}

export function updateQuestion(questionId, question) {
  return model.updateOne({ _id: questionId }, { $set: question });
}

export function deleteQuestion(questionId) {
  return model.deleteOne({ _id: questionId });
}
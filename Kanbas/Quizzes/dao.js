import model from "./model.js";

export function createQuiz(quiz) {
  return model.create(quiz);
}

export function findAllQuizzes() {
  return model.find();
}

export function findQuizzesByCourse(courseId) {
  return model.find({ course: courseId });
}

export function findQuizById(quizId) {
  return model.findById(quizId);
}

export function updateQuiz(quizId, quiz) {
  return model.updateOne({ _id: quizId }, { $set: quiz });
}

export function deleteQuiz(quizId) {
  return model.deleteOne({ _id: quizId });
}

export function publishQuiz(quizId) {
  return model.updateOne({ _id: quizId }, { $set: { isPublished: true } });
}

export function unpublishQuiz(quizId) {
  return model.updateOne({ _id: quizId }, { $set: { isPublished: false } });
}
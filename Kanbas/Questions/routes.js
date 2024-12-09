import * as dao from "./dao.js";

export default function QuestionRoutes(app) {
  app.post("/api/quizzes/:quizId/questions", async (req, res) => {
    const { quizId } = req.params;
    const question = await dao.createQuestion({ ...req.body, quiz: quizId });
    res.json(question);
  });

  app.get("/api/quizzes/:quizId/questions", async (req, res) => {
    const { quizId } = req.params;
    const questions = await dao.findQuestionsByQuiz(quizId);
    res.json(questions);
  });

  app.put("/api/questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const updatedQuestion = await dao.updateQuestion(questionId, req.body);
    res.json(updatedQuestion);
  });

  app.delete("/api/questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const status = await dao.deleteQuestion(questionId);
    res.json(status);
  });
}
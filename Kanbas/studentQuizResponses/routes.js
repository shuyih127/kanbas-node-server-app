import * as dao from "./dao.js";

export default function studentResponseRoutes(app) {
  app.post("/api/quizzes/:quizId/student-responses", async (req, res) => {
    const { quizId } = req.params;
    const { studentId, responses, score, attemptNumber } = req.body;
    const result = await dao.saveStudentResponse(quizId, studentId, responses, score, attemptNumber);
    res.json(result);
  });

  app.get("/api/quizzes/:quizId/student-responses/:studentId", async (req, res) => {
    const { quizId, studentId } = req.params;
    const result = await dao.getStudentResponse(quizId, studentId);
    res.json(result);
  });

  app.get("/api/quizzes/:quizId/student-responses", async (req, res) => {
    const { quizId } = req.params;
    const results = await dao.getStudentResponsesByQuiz(quizId);
    res.json(results);
  });
}

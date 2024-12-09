import * as dao from "./dao.js";

export default function facultyResposneRoutes(app) {
    app.post("/api/quizzes/:quizId/faculty-responses", async (req, res) => {
        const { quizId } = req.params;
        const { userId, responses, score } = req.body;
        const result = await dao.saveFacultyResponses(quizId, userId, responses, score);
        res.json(result);
    });

    app.get("/api/quizzes/:quizId/faculty-responses", async (req, res) => {
        const { quizId } = req.params;
        const responses = await dao.getFacultyResponsesByQuiz(quizId);
        res.json(responses);
    });
}
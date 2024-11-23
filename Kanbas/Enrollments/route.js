import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {

  app.post("/api/enrollments", async (req, res) => {
    const { userId, courseId } = req.body;
    if (!userId || !courseId) {
      return res.status(400).send("User ID and Course ID are required.");
    }
    enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.status(201).send({ message: "Enrolled successfully" });
  });

  app.delete("/api/enrollments", async (req, res) => {
    const { userId, courseId } = req.body;
    if (!userId || !courseId) {
      return res.status(400).send("User ID and Course ID are required.");
    }
    enrollmentsDao.unenrollUserFromCourse(userId, courseId);
    res.status(200).send({ message: "Unenrolled successfully" });
  });

  app.get("/api/enrollments/:userId", async (req, res) => {
    const { userId } = req.params;
    const enrollments = enrollmentsDao.findEnrollmentsForUser(userId);
    res.status(200).send(enrollments);
  });
}
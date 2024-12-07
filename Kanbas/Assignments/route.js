import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.post("/api/assignments", async (req, res) => {
    const assignment = req.body;
    const newAssignment = await dao.createAssignment(assignment);
    res.json(newAssignment);
  });

  app.get("/api/assignments", async (req, res) => {
    const assignments = await dao.getAssignments();
    res.json(assignments);
  });

  app.get("/api/courses/:courseId/assignments", async (req, res) => {
    const { courseId } = req.params;
    const assignments = await dao.getAssignmentsForCourse(courseId);
    res.json(assignments);
  });

  app.get("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignment = await dao.getAssignmentById(assignmentId);
    res.json(assignment);
  });

  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const updates = req.body;
    const updatedAssignment = await dao.updateAssignment(
      assignmentId,
      updates
    );
    res.json(updatedAssignment); 
  });

  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const result = await dao.deleteAssignment(assignmentId);
    res.json(result);
  });
}
import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
    app.post("/api/assignments", async (req, res) => {
        const assignment = req.body;
        const newAssignment = assignmentsDao.createAssignment(assignment);
        res.send(newAssignment);
    });

    app.get("/api/assignments", async (req, res) => {
        const assignments = assignmentsDao.getAssignments();
        res.send(assignments);
    });

    app.get("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignment = assignmentsDao.getAssignmentById(assignmentId);
        res.send(assignment);
    });

    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const updates = req.body;
        const updatedAssignment = assignmentsDao.updateAssignment(assignmentId, updates);
        res.send(updatedAssignment);
    });

    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const result = assignmentsDao.deleteAssignment(assignmentId);
        res.send(result);
    });
}
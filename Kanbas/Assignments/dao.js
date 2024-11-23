import Database from "../Database/index.js";

export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: Date.now().toString() };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}

export function getAssignments() {
    return Database.assignments;
}

export function getAssignmentById(assignmentId) {
    return Database.assignments.find((assignment) => assignment._id === assignmentId);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
    const assignment = Database.assignments.find((a) => a._id === assignmentId);
    if (assignment) {
        Object.assign(assignment, assignmentUpdates);
    }
    return assignment;
}

export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((a) => a._id !== assignmentId);
    return { success: true };
}
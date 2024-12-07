import model from "./model.js";

export function createAssignment(assignment) {
  return model.create(assignment);
}

export function getAssignments() {
  return model.find().populate("course");
}

export function getAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
}

export function getAssignmentById(assignmentId) {
  return model.findById(assignmentId);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  return model.findByIdAndUpdate(assignmentId, assignmentUpdates, {
    new: true,
  });
}

export function deleteAssignment(assignmentId) {
  return model.findByIdAndDelete(assignmentId);
}
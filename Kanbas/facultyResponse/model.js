import mongoose from "mongoose";
import facultyResponseSchema from "./schema.js";

const model = mongoose.model("FacultyResponseModel", facultyResponseSchema);
export default model;

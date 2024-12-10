import mongoose from "mongoose";
import studentResponseSchema from "./schema.js";

const model = mongoose.model("studentResponseModel", studentResponseSchema);
export default model;

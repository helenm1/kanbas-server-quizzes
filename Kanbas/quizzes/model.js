import mongoose from "mongoose";
import quizzesSchema from "./schema.js";
const quizzesModel = mongoose.model("Quiz", quizzesSchema);
export default quizzesModel;

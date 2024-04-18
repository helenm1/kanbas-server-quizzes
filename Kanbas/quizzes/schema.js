import mongoose from "mongoose";
const quizzesSchema = mongoose.Schema(
  {
    id: String,
    name: String,
    availability: String,
    dueDate: String,
    points: Number,
    numQuestions: Number,
    course: String,
  },
  { collection: "quizzes" }
);
export default quizzesSchema;

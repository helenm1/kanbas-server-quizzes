import mongoose from "mongoose";
const quizzesSchema = mongoose.Schema(
  {
    id: String,
    name: String,
    availability: String,
    published: Boolean,
    dueDate: String,
    points: Number,
    numQuestions: Number,
    course: String,
  },
  { collection: "quizzes" }
);
export default quizzesSchema;

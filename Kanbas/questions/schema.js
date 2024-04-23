import mongoose from "mongoose";
const questionSchema = mongoose.Schema(
  {
    quizId: { type: String, required: true },
    questionText: { type: String, required: true },
    points: { type: Number, required: true },
    questionType: {
      type: String,
      enum: ["TRUE_FALSE", "MULTIPLE_CHOICE", "FILL_IN"],
      default: "MULTIPLE_CHOICE",
    },
    tfAnswer: { type: Boolean, default: false },
    mcAnswers: {
      type: [
        {
          answer: String,
          correct: Boolean,
        },
      ],
      default: [],
    },
    fillInAnswers: {
      type: [String],
      default: [],
    },
  },

  { collection: "questions" }
);
export default questionSchema;

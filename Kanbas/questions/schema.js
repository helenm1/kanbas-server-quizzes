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
    tfAnswer: { type: Boolean, required: questionType === "TRUE_FALSE" },
    mcAnswers: {
      type: [
        {
          answer: String,
          correct: Boolean,
        },
      ],
      required: questionType === "MULTIPLE_CHOICE",
    },
    fillInAnswers: {
      type: [String],
      required: questionType === "FILL_IN",
    },
  },

  { collection: "questions" }
);
export default questionSchema;

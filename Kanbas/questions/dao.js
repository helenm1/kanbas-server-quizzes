import questionModel from "./model.js";

export const findAllQuestions = () => questionModel.find();
export const findQuestionById = (id) => questionModel.findById(id);
export const findQuestionsByQuiz = (quizId) => questionModel.find({ quizId });
export const createQuestion = (question) => questionModel.create(question);
export const updateQuestion = (id, question) =>
  questionModel.updateOne({ _id: id }, { $set: question });
export const deleteQuestion = (id) => questionModel.deleteOne({ _id: id });

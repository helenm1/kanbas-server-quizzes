import quizzesModel from "./model.js";

export const findAllQuizzes = () => quizzesModel.find();
export const findQuizById = (id) => quizzesModel.findById(id);
export const findQuizzesByCourse = (course) =>
  quizzesModel.find({ courseId: course });
export const createQuiz = (quiz) => quizzesModel.create(quiz);
export const updateQuiz = (id, quiz) => {
  console.log("quiz id", id);
  return quizzesModel.updateOne({ _id: id }, { $set: quiz });
};
export const deleteQuiz = (id) => quizzesModel.deleteOne({ _id: id });
export const publishQuiz = (id) =>
  quizzesModel.updateOne({ _id: id }, { published: true });

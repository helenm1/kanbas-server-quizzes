// import db from "../Database/index.js";
import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  const findAllQuizzes = async (req, res) => {
    const quizzes = await dao.findAllQuizzes();

    res.json(quizzes);
  };

  const findQuizById = async (req, res) => {
    console.log("req.params", req.params);
    const id = req.params.quizId;
    console.log("id in routes", id);
    const quiz = await dao.findQuizById(id);
    console.log("quiz in routes", quiz);
    res.json(quiz);
  };

  const createQuiz = async (req, res) => {
    const quiz = await dao.createQuiz(req.body);
    res.json(quiz);
  };

  const deleteQuiz = async (req, res) => {
    const status = await dao.deleteModule(req.params.id);
    res.json(status);
  };

  const updateQuiz = async (req, res) => {
    const { courseId, quizId } = req.params;
    const status = await dao.updateQuiz(quizId, req.body);
    res.json(status);
  };
  app.get("/api/courses/:id/quizzes", findAllQuizzes);
  app.get("/api/courses/:courseId/quizzes/:quizId", findQuizById);
  app.post("/api/courses/:id/quizzes", createQuiz);
  app.put("/api/courses/:courseId/quizzes/:quizId", updateQuiz);
  app.delete("/api/courses/:id/quizzes/:id", deleteQuiz);
}

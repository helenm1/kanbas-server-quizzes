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
    console.log("quiz in createquiz", quiz);
  };

  const deleteQuiz = async (req, res) => {
    const { id } = req.params;
    console.log("reqbody in deletequiz", req.params);
    console.log("id in deletequiz", id);

    const status = await dao.deleteQuiz(id);
    res.json(status);
  };

  const updateQuiz = async (req, res) => {
    const { courseId, quizId } = req.params;
    const status = await dao.updateQuiz(quizId, req.body);
    res.json(status);
  };

  const publishQuiz = async (req, res) => {
    const { courseId, quizId } = req.params;
    const status = await dao.publishQuiz(quizId);
    res.json(status);
  };

  const unpublishQuiz = async (req, res) => {
    const { courseId, quizId } = req.params;
    const status = await dao.unpublishQuiz(quizId);
    console.log("status in unpublish", status);
    // console.log("quiz in unpublish", quiz);
    res.json(status);
  };

  app.get("/api/courses/:id/quizzes", findAllQuizzes);
  app.get("/api/courses/:courseId/quizzes/:quizId", findQuizById);
  app.post("/api/courses/:id/quizzes", createQuiz);
  app.put("/api/courses/:courseId/quizzes/:quizId", updateQuiz);
  app.put("/api/courses/:courseId/quizzes/:quizId/publish", publishQuiz);
  app.put("/api/courses/:courseId/quizzes/:quizId/unpublish", unpublishQuiz);
  app.delete("/api/courses/:id/quizzes/:id", deleteQuiz);
}

import * as dao from "./dao.js";

export default function QuestionRoutes(app) {
  const findAllQuestions = async (req, res) => {
    const questions = await dao.findAllQuestions();
    res.json(questions);
  };

  const findQuestionsByQuiz = async (req, res) => {
    const quizId = req.params.quizId;
    const questions = await dao.findQuestionsByQuiz(quizId);
    res.json(questions);
  };
  const findQuestionById = async (req, res) => {
    const id = req.params.id;
    const question = await dao.findQuestionById(id);
    res.json(question);
  };

  const createQuestion = async (req, res) => {
    const question = await dao.createQuestion(req.body);
    res.json(question);
  };

  const deleteQuestion = async (req, res) => {
    console.log("req in deletequestion", req.params);
    const status = await dao.deleteQuestion(req.params.questionId);
    console.log("status in deletequestion", status);
    res.json(status);
  };

  const updateQuestion = async (req, res) => {
    const id = req.params.id;
    const status = await dao.updateQuestion(id, req.body);
    res.json(status);
  };

  app.get("/api/questions", findAllQuestions);
  app.get(
    "/api/courses/:courseId/quizzes/:quizId/questions",
    findQuestionsByQuiz
  );
  app.get(
    "/api/courses/:courseId/quizzes/:quizId/questions/:questionId",
    findQuestionById
  );
  app.post("/api/courses/:courseId/quizzes/:quizId/questions", createQuestion);
  app.put(
    "/api/courses/:courseId/quizzes/:quizId/questions/:questionId",
    updateQuestion
  );
  app.delete(
    "/api/courses/:courseId/quizzes/:quizId/questions/:questionId",
    deleteQuestion
  );
}

import * as dao from "./dao.js";

export default function QuestionRoutes(app) {
  const findAllQuestions = async (req, res) => {
    const questions = await dao.findAllQuestions();
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
    const status = await dao.deleteQuestion(req.params.id);
    res.json(status);
  };

  const updateQuestion = async (req, res) => {
    const id = req.params.id;
    const status = await dao.updateQuestion(id, req.body);
    res.json(status);
  };

  app.get("/api/questions", findAllQuestions);
  app.get("/api/questions/:id", findQuestionById);
  app.post("/api/questions", createQuestion);
  app.put("/api/questions/:id", updateQuestion);
  app.delete("/api/questions/:id", deleteQuestion);
}

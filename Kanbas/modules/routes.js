// import db from "../Database/index.js";
import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const findAllModules = async (req, res) => {
    // console.log(req.params.id);
    const modules = await dao.findAllModules();

    res.json(modules);
  };

  const findModuleById = async (req, res) => {
    const id = req.params._id;
    // const course = db.courses.find((course) => course._id === id);
    const module = await dao.findModuleById(id);
    res.json(module);
  };

  const createModule = async (req, res) => {
    const module = await dao.createModule(req.body);
    res.json(module);
  };

  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.id);
    res.json(status);
  };

  const updateModule = async (req, res) => {
    const { courseId, moduleId } = req.params;
    const status = await dao.updateModule(moduleId, req.body);
    res.json(status);
  };
  app.get("/api/courses/:id/modules", findAllModules);
  app.get("/api/courses/:id/modules/:id", findModuleById);
  app.post("/api/courses/:id/modules", createModule);
  app.put("/api/courses/:courseId/modules/:moduleId", updateModule);
  app.delete("/api/courses/:id/modules/:id", deleteModule);
}

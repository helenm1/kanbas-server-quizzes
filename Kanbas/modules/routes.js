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
    console.log("id in update module", req.params.id);
    console.log("body", req.body);
    const { moduleId } = req.params.id;
    const status = await dao.updateModule(moduleId, req.body);
    // currentModule = await dao.findModuleById(moduleId);
    res.json(status);
  };
  app.get("/api/courses/:id/modules", findAllModules);
  app.get("/api/courses/:id/modules/:id", findModuleById);
  app.post("/api/courses/:id/modules", createModule);
  app.put("/api/courses/:id/modules/:id", updateModule);
  app.delete("/api/courses/:id/modules/:id", deleteModule);
}
//OLD

// function ModuleRoutes(app) {
//   app.put("/api/modules/:mid", (req, res) => {
//     const { mid } = req.params;
//     const moduleIndex = db.modules.findIndex((m) => m._id === mid);
//     db.modules[moduleIndex] = {
//       ...db.modules[moduleIndex],
//       ...req.body,
//     };
//     res.sendStatus(204);
//   });

//   app.delete("/api/modules/:mid", (req, res) => {
//     const { mid } = req.params;
//     db.modules = db.modules.filter((m) => m._id !== mid);
//     res.sendStatus(200);
//   });

//   app.post("/api/courses/:cid/modules", (req, res) => {
//     const { cid } = req.params;
//     const newModule = {
//       ...req.body,
//       course: cid,
//       _id: new Date().getTime().toString(),
//     };
//     db.modules.push(newModule);
//     res.send(newModule);
//   });

//   app.get("/api/courses/:cid/modules", (req, res) => {
//     const { cid } = req.params;
//     const modules = db.modules.filter((m) => m.course === cid);
//     res.send(modules);
//   });
// }
// export default ModuleRoutes;

import modulesModel from "./model.js";

export const findAllModules = () => modulesModel.find();
export const findModuleById = (id) => modulesModel.findById(id);
export const findModulesByCourse = (course) => modulesModel.find({ course });
export const createModule = (module) => modulesModel.create(module);
export const updateModule = (id, module) => {
  console.log("module id", id);
  return modulesModel.updateOne({ _id: id }, { $set: module });
};
export const deleteModule = (id) => modulesModel.deleteOne({ _id: id });

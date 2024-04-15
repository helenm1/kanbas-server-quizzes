import mongoose from "mongoose";
import modulesSchema from "./schema.js";
const modulesModel = mongoose.model("Module", modulesSchema);
export default modulesModel;

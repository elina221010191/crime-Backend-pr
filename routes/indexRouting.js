import express from "express";
import contactRouter from "./contactPath.js";
import UserRoute from "./userPath.js"
const mainRouter=express.Router();
mainRouter.use("/contact",contactRouter)
mainRouter.use("/user",UserRoute)
export default mainRouter;
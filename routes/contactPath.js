import {createContact} from "../controllers/contactController.js";
import express from "express";
// import {authorize,authenticateToken} from "../middlewares/tokenVerification.js"
const contactRouter=express();

contactRouter.post("/createContact",createContact);
// contactRouter.get("/DeletecontactbyId/:id",DeleteByID)
// contactRouter.get("/getAllContact",authenticateToken,authorize("admin"),getAllContact)
// contactRouter.get("/getContactById/:id",getContactById)
// contactRouter.delete("/deleteContactById/:id",deleteContactById)
// contactRouter.put("/updateContactById/:id",updateContactById)

export default contactRouter;
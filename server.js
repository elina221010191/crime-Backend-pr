import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import bodyParser from "body-parser";  // ✅ Correct casing
import cors from "cors"
import mainRouter from './routes/indexRouting.js';
dotenv.config();
const db_user=process.env.DB_USER;
const db_name=process.env.DB_NAME;
const port=process.env.PORT||3000; 
const db_pass=process.env.DB_PASS
const app=express();
app.use(cors({
  origin: "*", 
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
}));
app.use(bodyParser.json());
app.use("/crime",mainRouter)

const dbUri = `mongodb+srv://${db_user}:${db_pass}@cluster0.wkv1d.mongodb.net/${db_name}`;
mongoose.set("strictQuery", false);
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Node API is running on port http://localhost:${port}`);
     
    });
  })
  .catch((error) => {
    console.log(error);
  });
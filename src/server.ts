import express, { Request, Response } from "express";
import { HomeRouter } from "./controller/homeController";

const app = express();



app.use("/home", HomeRouter);


app.get("/", (req: Request, res: Response) => {
  res.send("I am laive");
});


export default app;

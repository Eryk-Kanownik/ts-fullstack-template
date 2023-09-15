import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Server runs at http://localhost:${process.env.SERVER_PORT}`)
);

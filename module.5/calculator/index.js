// create express app to basic math functions
import express from "express";
import cors from "cors";
import { add } from "./controller";
const app = express();
const port = 4000;

app.use(cors());

//http://localhost:3000/add?a=1&b=20
app.get("/add", add);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;

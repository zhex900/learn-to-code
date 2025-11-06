// create express app to basic math functions
import express from "express";
import cors from "cors";
import { add } from "./controller.js";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert { type: "json" };

const app = express();
const port = 4000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());

app.get("/add", add);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;

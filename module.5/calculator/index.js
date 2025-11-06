// create express app to basic math functions
import express from "express";
import cors from "cors";

const app = express();
const port = 4000;

app.use(cors());

//http://localhost:3000/add?a=1&b=20
app.get("/add", (req, res) => {
  const { a, b } = req.headers;
  console.log({ a, b });
  res.json({
    result: Number(req.query.a) + Number(req.query.b),
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;

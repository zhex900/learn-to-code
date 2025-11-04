// create express app to basic math functions
import express from "express";
const app = express();
const port = 3000;

//http://localhost:3000/add?a=1&b=20
app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send(`${a} + ${b} = ${a + b}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;

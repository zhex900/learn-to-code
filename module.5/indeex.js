import express, { Router } from "express";

const app = express();
const port = 3000;
const router = Router();

const users = [
  { id: 1, name: "Anthony Albanese", country: "AU" },
  { id: 2, name: "Joe Biden", country: "US" },
  { id: 3, name: "Chris Hipkins", country: "NZ" },
  { id: 4, name: "Lee Hsien Loong", country: "SG" },
];

// Dynamic request param endpoint - get the user matching the specific ID ie. /users/3
router.get("/:id", (req, res) => {
  console.log(req.params);
  console.log("headers", req.headers);
  const { owner } = req.headers;
  console.log({ owner });
  let userId = req.params.id; // 'id' will be a value matching anything after the / in the request path
  let user = users.find((user) => user.id == userId);

  if (user) {
    res.status(200).json({ result: user });
  } else {
    res.status(404).json({ result: `User ${userId} not found` });
  }
});

app.use("/users", router);

app.get("/user/:id/bob", (req, res) => {
  res.send(`User ID is: ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

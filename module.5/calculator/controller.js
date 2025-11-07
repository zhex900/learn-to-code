import { Calculator } from "./lib/Calculator.js";

const cal = new Calculator();

export const add = (req, res) => {
  return res.json({
    result: cal.add(Number(req.query.b), Number(req.query.a)),
  });
};

export const minus = (req, res) => {
  return res.json({
    result: cal.minus(Number(req.query.b), Number(req.query.a)),
  });
};

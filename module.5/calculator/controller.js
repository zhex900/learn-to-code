export const add = (req, res) => {
  return res.json({
    result: Number(req.query.b) + Number(req.query.a),
  });
};

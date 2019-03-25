const controller = {};

controller.verify = async (req, res) => {
  const token = req.body.token;
  const random = Math.random() * 256;
  const result = !!(random % 2);
  res.status(200).send({ result, token });
};

export default controller;

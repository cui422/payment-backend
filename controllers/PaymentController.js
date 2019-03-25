const controller = {};

controller.verify = async (req, res) => {
  const token = req.body.token;
  const result = !!((Math.random() * 256) % 2);
  res.status(200).send({ result, token });
};

export default controller;

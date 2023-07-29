const { Order, Shoe } = require("../models/index.js");

const OrderController = {
  async getAll(req, res) {
    try {
      const getAllorders = await Order.findAll({
        include: [{ model: Shoe, through: { attributes: [] } }],
      });

      res.status(200).send(getAllorders);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: "Server error. An error occurred while executing the action",
      });
    }
  },

  async create(req, res) {
    try {
      const order = await Order.create(req.body);

      res.status(201).send({ msg: "Shoe created successfully...", order });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error:
          "An error occurred while executing the action. Did you fill all the fields?",
        err,
      });
    }
  },
};

module.exports = OrderController;

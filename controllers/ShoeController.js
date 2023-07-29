const {
  Shoe,
  Type,
  ShoesOrder,
  Review,
  Sequelize,
} = require("../models/index.js");
const { Op } = Sequelize;

const ShoeController = {
  async getAll(req, res) {
    try {
      const getAllShoes = await Shoe.findAll();
      res.status(200).send(getAllShoes);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: "Server error. An error occurred while executing the action",
        err,
      });
    }
  },

  async getAllWithType(req, res) {
    try {
      const getAllShoesWithType = await Shoe.findAll({
        include: [
          {
            model: Type,
            attributes: ["name"],
          },

          {
            model:Review,
            attributes: ["title", "comment"]
          }
        ],
      });
      res.status(200).send(getAllShoesWithType);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: "Server error. An error occurred while executing the action",
        err,
      });
    }
  },

  async getById(req, res) {
    try {
      const getShoeById = await Shoe.findByPk(req.params.id, {
        include: [Type, Review],
      });
      res.status(200).send(getShoeById);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: "Server error. An error occurred while executing the action",
        err,
      });
    }
  },

  async getByBrand(req, res) {
    try {
      const getShoeByBrand = await Shoe.findAll({
        where: {
          brand: {
            [Op.like]: `%${req.params.brand}%`,
          },
        },
      });
      res.status(200).send(getShoeByBrand);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: "Server error. An error occurred while executing the action",
        err,
      });
    }
  },

  async getByPrice(req, res) {
    try {
      const price = req.params.price;

      const getShoeByPrice = await Shoe.findAll({
        where: {
          price: {
            [Op.gte]: price,
          },
        },
      });
      res.status(200).send(getShoeByPrice);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: "Server error. An error occurred while executing the action",
        err,
      });
    }
  },

  async getAllDesc(req, res) {
    try {
      const getAllShoesDesc = await Shoe.findAll({
        order: [["price", "DESC"]],
      });
      res.status(200).send(getAllShoesDesc);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: "Server error. An error occurred while executing the action",
        err,
      });
    }
  },

  async create(req, res, next) {
    try {
      const shoe = await Shoe.create(req.body);
      await shoe.addOrder(req.body.OrderId);

      res.status(201).send({ msg: "Shoe created successfully...", shoe });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  async update(req, res) {
    try {
      await Shoe.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      const shoeUpdated = await Shoe.findByPk(req.params.id);

      shoeUpdated.setOrders(req.body.OrderId);

      res.send("Shoe updated successfully...");
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: "Server error. An error occurred while executing the action",
        err,
      });
    }
  },

  async delete(req, res) {
    try {
      await Shoe.destroy({
        where: {
          id: req.params.id,
        },
      });

      await ShoesOrder.destroy({
        where: {
          ShoeId: req.params.id,
        },
      });

      res.send("Shoe deleted successfully...");
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: "Server error. An error occurred while executing the action",
        err,
      });
    }
  },
};

module.exports = ShoeController;

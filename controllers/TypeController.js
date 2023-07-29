const { Type, Shoe, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;

const TypeController = {
  async getAll(req, res) {
    try {
      const getAlltypes = await Type.findAll();
      res.status(200).send(getAlltypes);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: "Server error. An error occurred while executing the action",
      });
    }
  },

  async getAllWithShoes(req, res) {
    try {
      const getAllTypesWithType = await Type.findAll({
        include: [
          {
            model: Shoe,
            attributes: ["brand", "color"],
          },
        ],
      });
      res.status(200).send(getAllTypesWithType);
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
      const getTypeById = await Type.findByPk(req.params.id);
      res.status(200).send(getTypeById);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: "Server error. An error occurred while executing the action",
        err,
      });
    }
  },

  async getByName(req, res) {
    try {
      const getTypeByName = await Type.findAll({
        where: {
          name: {
            [Op.like]: `%${req.params.name}%`,
          },
        },
      });
      res.status(200).send(getTypeByName);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: "Server error. An error occurred while executing the action",
        err,
      });
    }
  },

  async create(req, res) {
    try {
      const type = await Type.create(req.body);
      res.status(201).send({ msg: "Type created successfully...", type });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: "Server error. An error occurred while executing the action",
      });
    }
  },

  async update(req, res) {
    try {
      await Type.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.send("Type updated successfully...");
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
      await Type.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send("Type deleted successfully...");
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: "Server error. An error occurred while executing the action",
        err,
      });
    }
  },
};

module.exports = TypeController;

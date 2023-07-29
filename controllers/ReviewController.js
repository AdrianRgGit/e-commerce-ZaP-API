const { Review, Shoe, User } = require("../models/index.js");

const ReviewController = {
  async getAll(req, res) {
    try {
      const getAllreviews = await Review.findAll({
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });;

      res.status(200).send(getAllreviews);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: "Server error. An error occurred while executing the action",
      });
    }
  },

  async create(req, res) {
    try {
      const review = await Review.create(req.body);

      res.status(201).send({ msg: "Review created successfully...", review });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  async update(req, res) {
    try {
      await Review.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      await Review.findByPk(req.params.id);

      res.send("Review updated successfully...");
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
      await Review.destroy({
        where: {
          id: req.params.id,
        },
      });

      res.send("Review deleted successfully...");
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: "Server error. An error occurred while executing the action",
        err,
      });
    }
  },
};

module.exports = ReviewController;

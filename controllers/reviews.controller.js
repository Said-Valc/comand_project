const { findByIdAndDelete } = require("../Models/Review.model");
const Review = require("../Models/Review.model");

module.exports.reviewsController = {
  //! пользователь может смотреть отзывы к товару;
  getReview: async (req, res) => {
    try {
      const review = await Review.findById({ products: req.params.id });
      res.json(review);
    } catch (error) {
      res.json(error);
    }
  },

  //! пользователь может оставлять свой отзыв;
  postReview: async (req, res) => {
    try {
      await Review.create(req.params.id, {
        author: req.body.author,
        text: req.body.text,
        product: req.body.product,
      });
      res.json("Отзыв добавлен");
    } catch (error) {
      res.json(error);
    }
  },

  //! Изменение отзыва
  patchReview: async (req, res) => {
    try {
      await Review.findByIdAndUpdate(req.params.id, {
        author: req.body.author,
        text: req.body.text,
        product: req.body.product,
      });
      res.json("Отзыв изменен");
    } catch (error) {
      res.json(error);
    }
  },

  //!администратор может удалять отзывы;
  deleteReview: async (req, res) => {
    try {
      await Review.findByIdAndDelete(req.params.id);
      res.json("Отзыв удален");
    } catch (error) {
      res.json(error);
    }
  },
};

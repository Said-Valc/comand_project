const User = require("../Models/User.model");
const Product = require("../Models");

module.exports.userController = {
  //добавление клиента
  postUser: async (req, res) => {
    try {
      await User.create(req.body), res.json("User dobavlen");
    } catch (error) {
      res.json(error);
    }
  },

  //вывод всех клиентов
  getUser: async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (error) {
      res.json(error);
    }
  },

  //удаление пользователя
  delUser: async (req, res) => {
    try {
      await User.findByIdAndRemove(req.params.id);
      res.json("user udalen");
    } catch (error) {
      res.json(error);
    }
  },

  //изменение пользователя
  pathUser: async (req, res) => {
    try {
      const { name, cash } = req.body;
      await User.findByIdAndUpdate(req.params.id, {
        name,
        cash,
      });
      res.json("user izmenen");
    } catch (error) {
      res.json(error);
    }
  },

  //добавление продукта в корзину
  addProducts: async (req, res) => {
    try {
      const user = User.findById(req.params.id);
      const product = Product.findById(req.body.basket);

      await User.findByIdAndUpdate(req.params.id, {
        $push: { basket: req.body.basket },
        sum: user.sum + product.price,
      });
      res.json("product dobavlen");
    } catch (error) {
      res.json(error);
    }
  },

  //удаление продукта из корзины
  delProducts: async (req, res) => {
    try {
      const user = User.findById(req.params.id);
      const product = Product.findById(req.body.basket);

      await User.findByIdAndUpdate(req.params.id, {
        $pull: { basket: req.body.basket },
        sum: user.sum - product.price,
      });
      res.json("product udalen");
    } catch (error) {
      res.json(error);
    }
  },
};

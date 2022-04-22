const Brand = require("../Models/Brand.model");

module.exports.brandsController = {
  addBrand: async (req, res) => {
    try {
      const newBrand = await Brand.create({
        title: req.body.title,
        description: req.body.description,
      });
      res.json(newBrand);
    } catch (e) {
      res.json(`error: ${e.message}`);
    }
  },

  editBrand: async (req, res) => {
    try {
      await Brand.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
      });
      res.json("Данные изменены");
    } catch (e) {
      res.json(`error: ${e.message}`);
    }
  },
  deleteBrand: async (req, res) => {
    try {
      await Brand.findByIdAndDelete(req / params.id);
      res.json("Брэнд удален");
    } catch (e) {
      res.json(`error: ${e.message}`);
    }
  },
  getBrands: async (req, res) => {
    try {
      const allBrands = Brand.find({});
      res.json(allBrands);
    } catch (e) {
      res.json(`error: ${e.message}`);
    }
  },
  getBrandById: async (req, res) => {
    try {
      const certainBrand = await Brand.findById(req.params.id);
      res.json(certainBrand);
    } catch (e) {
      res.json(`error: ${e.message}`);
    }
  },
};

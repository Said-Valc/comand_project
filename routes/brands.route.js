const { Router } = require("express");
const { brandsController } = require("../controllers/brands.controller");

const router = Router();

router.post("/user/brands", brandsController.addBrand);
router.patch("/admin/brands", brandsController.editBrand);
router.delete("/admin/brands", brandsController.deleteBrand);
router.get("/user/brands", brandsController.getBrands);

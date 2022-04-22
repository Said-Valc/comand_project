const { Router } = require("express");
const { userController } = require("../controllers/users.controllers");

const router = Router();

//user
router.post("/user", userController.postUser);
router.patch("/addProducts/:id", userController.addProducts);
router.patch("/delProducts/:id", userController.delProducts);

//admin
router.get("/admin", userController.getUser);
router.delete("/admin/:id", userController.delProducts);
router.patch("/admin/:id", userController.pathUser);

module.exports = router;

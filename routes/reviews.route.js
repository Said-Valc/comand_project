const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();

//! ФУНКЦИОНАЛ КЛИЕНТА
router.get("/review", reviewsController.getReview);
router.post("/review/:id", reviewsController.postReview);
router.patch("/review/:id", reviewsController.patchReview);

//! ФУНКЦИОНАЛ АДМИНА
router.get("/admin/review", reviewsController.getReview);
router.post("/admin/review", reviewsController.postReview);
router.patch("/admin/review/:id", reviewsController.patchReview);
router.delete("/admin/review/:id", reviewsController.deleteReview);

module.exports = router;

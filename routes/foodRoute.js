import express from 'express';
const router = express.Router();

import foodController from '../controllers/food.controller.js';

router.route("/")
    .post(foodController.createFood)
    .get(foodController.getfoodById);

router.route("/:id")
    .patch(foodController.updatefood)
    .delete(foodController.deletefood);

export default router;

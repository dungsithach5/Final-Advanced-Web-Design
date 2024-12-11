import express from 'express';
const router = express.Router();

import AppetizersController from '../controllers/appetizers.controller.js';

router.route("/")
    .post(AppetizersController.createAppetizers)
    .get(AppetizersController.getAppetizersById);

router.route("/:id")
    .patch(AppetizersController.updateAppetizers)
    .delete(AppetizersController.deleteAppetizers);

export default router;

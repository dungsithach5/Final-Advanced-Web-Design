import express from 'express';
import Appetizers from '../models/appetizers.model.js'
const router = express.Router();

import AppetizersController from '../controllers/appetizers.controller.js';

router.route("/")
    .post(AppetizersController.createAppetizers)
    .get(AppetizersController.getAppetizersById);

router.route("/:id")
    .patch(AppetizersController.updateAppetizers)
    .delete(AppetizersController.deleteAppetizers);

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const appertizers = await Appetizers.findById(id);
        res.json(appertizers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});
export default router;

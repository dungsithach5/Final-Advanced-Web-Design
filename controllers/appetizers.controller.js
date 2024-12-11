import AppetizersModel from '../models/appetizers.model.js';
const appetizersController = {

    getAppetizersById: async (req, res) => {
        try {
            const appetizers = await AppetizersModel.find();
            res.status(200).json(appetizers);
        } catch (error) {
            res.status(500).send('Error fetching appetizers');
        }
    },


    createAppetizers: async (req, res) => {
        const body = req.body;
        try {
            const newAppetizers = await AppetizersModel.create(body);
            res.status(201).json(newAppetizers);
        } catch (error) {
            res.status(500).send('Error creating appetizers');
        }
    },


    updateAppetizers: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedAppetizers = await AppetizersModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedAppetizers);
        } catch (error) {
            res.status(500).send('Error updating appetizers');
        }
    },


    deleteAppetizers: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedAppetizers = await AppetizersModel.findByIdAndDelete(id);
            res.status(200).json(deletedAppetizers);
        } catch (error) {
            res.status(500).send('Error deleting appetizers');
        }
    }
};

export default appetizersController;

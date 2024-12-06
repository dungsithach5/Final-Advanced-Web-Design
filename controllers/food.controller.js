import foodModel from '../models/food.model.js';
const foodController = {

    getfoodById: async (req, res) => {
        try {
            const users = await foodModel.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).send('Error fetching products');
        }
    },


    createFood: async (req, res) => {
        const body = req.body;
        try {
            const newCategory = await foodModel.create(body);
            res.status(201).json(newCategory);
        } catch (error) {
            res.status(500).send('Error creating products');
        }
    },


    updatefood: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedUser = await foodModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).send('Error updating products');
        }
    },


    deletefood: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedUser = await foodModel.findByIdAndDelete(id);
            res.status(200).json(deletedUser);
        } catch (error) {
            res.status(500).send('Error deleting products');
        }
    }
};

export default foodController;

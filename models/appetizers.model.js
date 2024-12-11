import mongoose from 'mongoose';

const AppetizersSchema = new mongoose.Schema({
    img: { type: String, required: true },
    name: { type: String, required: true },
    japanese: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    price: { type: String, required: true },
},{timestamps: true});

const appetizer = mongoose.model('Appetizers', AppetizersSchema);

export default appetizer;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productForPetsSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        petType: { type: String, required: true },
        category: { type: String, required: true }
    },
    {
        timestamps: true,
        collection: 'products-for-pets'
    }
);

const ProductForPets = mongoose.model('products-for-pets', productForPetsSchema, 'products-for-pets');

module.exports = ProductForPets;
const Product = require('../models/Product');

const getProductsForPets = async (req, res, next) => {
    try {
        const productsForPets = await Product.find();
        return res.status(200).json(productsForPets);
    } catch (err) {
        return next(err);
    }
};

const getProductForPetsById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const productForPets = await Product.findById(id);
        return res.status(200).json(productForPets);
    } catch (err) {
        return next(err);
    }
}

const postProductForPets = async (req, res, next) => {
    try {
        const newProductForPets = new Product(req.body);
        const savedProductForPets = await newProductForPets.save();
        return res.status(201).json(savedProductForPets);
    } catch (err) {
        return next(err);
    }
};

const updateProductForPets = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newProductForPets = new Product(req.body);
        newProductForPets._id = id;
        const updatedProductForPets = await Product.findByIdAndUpdate(id, newProductForPets, { new: true });
        return res.status(201).json(updatedProductForPets);
    } catch (err) {
        return next(err);
    }
};

const deleteProductForPets = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedProductForPets = await Product.findByIdAndDelete(id);
        return res.status(200).json(deletedProductForPets);
    } catch (err) {
        return next(err);
    }
};

module.exports = { getProductsForPets, getProductForPetsById, postProductForPets, updateProductForPets, deleteProductForPets };
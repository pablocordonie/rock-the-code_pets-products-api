const express = require('express');
const productsRouter = express.Router();
const { getProductsForPets, getProductForPetsById, postProductForPets, updateProductForPets, deleteProductForPets } = require('../controllers/product');

productsRouter.get('/:id', getProductForPetsById);
productsRouter.get('/', getProductsForPets);

productsRouter.post('/', postProductForPets);

productsRouter.put('/:id', updateProductForPets);

productsRouter.delete('/:id', deleteProductForPets);

module.exports = productsRouter;
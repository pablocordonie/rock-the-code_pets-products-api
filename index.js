require('dotenv').config();
const PORT = 8000;
const LOCALHOST = `http://localhost:${PORT}`;

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { connectDB } = require('./src/config/db');
connectDB();

const productsRouter = require('./src/api/routes/product.routes');
app.use('/api/v1/pets-products', productsRouter);

const pong = (req, res, next) => res.status(200).json('Pong!');
app.use('/ping', pong);

app.use('*', (req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
});

app.listen(PORT, () => {
    console.log(`Listening on: ${LOCALHOST}`);
});
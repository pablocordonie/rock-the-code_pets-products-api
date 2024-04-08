require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../../api/models/Product');

const organicPetsProducts = [
    {
        name: "Alimento Orgánico para Perros",
        description: "Croquetas premium para perros elaboradas con ingredientes orgánicos como carne de pollo criado en libertad, arroz integral y vegetales frescos. Sin colorantes ni conservantes artificiales.",
        price: 25.99,
        petType: "Perros",
        category: "Alimento"
    },
    {
        name: "Juguete Natural para Gatos",
        description: "Juguete interactivo para gatos hecho a mano con materiales naturales como cáñamo y hierba gatera. Ideal para fomentar el ejercicio y la estimulación mental de tu gato.",
        price: 12.50,
        petType: "Gatos",
        category: "Juguete"
    },
    {
        name: "Champú Orgánico para Mascotas",
        description: "Champú suave y libre de químicos agresivos para mascotas, formulado con extractos naturales de manzanilla y aloe vera. Limpia profundamente sin irritar la piel sensible de tu mascota.",
        price: 8.99,
        petType: "Perros y Gatos",
        category: "Higiene"
    },
    {
        name: "Snacks Naturales para Perros",
        description: "Premios naturales y saludables para perros, hechos con ingredientes orgánicos como carne de cordero criado en pastos libres de hormonas y conservantes artificiales. Ideales como recompensa durante el entrenamiento.",
        price: 6.99,
        petType: "Perros",
        category: "Snack"
    },
    {
        name: "Cama de Felpa Orgánica para Gatos",
        description: "Cama acolchada para gatos confeccionada con tela de felpa orgánica y relleno de algodón natural. Proporciona un lugar cálido y cómodo para que tu gato descanse y se relaje.",
        price: 29.99,
        petType: "Gatos",
        category: "Cama"
    },
    {
        name: "Collar de Cuero Vegano para Perros",
        description: "Collar elegante y duradero para perros fabricado con cuero vegano de alta calidad, sin productos de origen animal. Diseño ajustable y resistente para un paseo seguro y cómodo.",
        price: 18.50,
        petType: "Perros",
        category: "Accesorio"
    }
];

mongoose.connect(process.env.DB_URL)
    .then(async () => {
        const productsForPetsCollection = await Product.find();
        if (productsForPetsCollection.length) {
            await Product.collection.drop();
            console.log(`The products for pets collection's been dropped`);
        }
    })
    .catch(err => console.log(`Error deleting data: ${err}`))
    .then(async () => {
        const productsForPetsData = organicPetsProducts.map(product => new Product(product));
        await Product.insertMany(productsForPetsData);
        console.log('The new products for pets data are inserted on the DB');
    })
    .catch(error => console.log(`Error creating the new data: ${error}`))
    .finally(() => mongoose.disconnect());
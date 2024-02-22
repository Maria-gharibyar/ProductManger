const mongoose = require('mongoose');

const ProductMangerSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
}, { timestamps: true });


const ProductManager = mongoose.model('ProductManager', ProductMangerSchema);
module.exports = ProductManager;

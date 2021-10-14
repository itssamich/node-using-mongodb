const mongoose = require('mongoose');

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    descriptions: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    price: {
        type: Number,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});


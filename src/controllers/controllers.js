const mongoose = require('mongoose');
const ProductSchema =require('../models/models.js')

const Product = mongoose.model('Product', ProductSchema);

export const addnewProduct = (req, res) => {    
    var newProduct = new Product(req.body);

    newProduct.save((err, Product) => {
        if(err) {
            res.json(err);
            return;
        }
        res.json(Product);
    });
}

export const getProducts = (req, res) => {
    Product.find({}, (err, Product) => {
        if(err) {
            res.json(err);
            return;
        }
        res.json(Product);
    })
}

export const getProductWithID = (req, res) => {
    Product.findById(req.params.ProductID, (err, Product) => {
        if(err) {
            res.json(err);
            return;
        }
        res.json(Product);
    })
}
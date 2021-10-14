const mongoose = require('mongoose');
import ProductSchema from '../models/models.js'

Product = mongoose.model('Product', ProductSchema);

export const addnewProduct = (req, res) => {    
    newProduct = new Product(req.body);

    newProduct.save((err, Product) => {
        if(err) {
            res.json(err);
            return;
        }
        res.json(Product);
    });
}
const ProductManager = require('../model/ProductManger.model');

module.exports.CreateNewproducts = (req, res) => {
    ProductManager.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({ products: newlyCreatedProduct });
            console.log(products);
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err });
        });
};

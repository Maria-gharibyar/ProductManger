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




module.exports.getAllproducts=(request,response)=>{
        ProductManager.find()
        .then(products=>{
            console.log(products)
            response.json(products)
        })
        .catch(err=>{
            console.log(err);
            response.json(err)
        })
};

module.exports.getOneproduct=(req,res)=>{
    ProductManager.findOne({_id:req.params.id})
    .then((oneProduct)=>{
        console.log(oneProduct);
        res.json(oneProduct)
    })
    .catch(err=>{
        console.log(err);
        response.json(err)
    })
}

module.exports.Updateproduct=(req,res)=>{
    ProductManager.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    .then(updateProduct=>res.json(updateProduct))
    .catch(err => res.json(err))
}
module.exports.deleteProduct=(req,res)=>{
    ProductManager.deleteOne({_id:req.params.id})
    .then(deleteProduct=>res.json(deleteProduct))
    .catch(err => res.json(err))
}
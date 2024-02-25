const productController=require('../controller/productManger.controller');



module.exports=(app)=>{
    app.post('/api/product',productController.CreateNewproducts);
    app.get('/api/product',productController.getAllproducts)
    app.get('/api/product/:id',productController.getOneproduct)
    app.patch('/api/product/:id',productController.Updateproduct)
    app.delete('/api/product/:id',productController.deleteProduct)
}
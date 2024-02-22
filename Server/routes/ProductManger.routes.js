const productController=require('../controller/productManger.controller');



module.exports=(app)=>{
    app.post('/api/products',productController.CreateNewproducts);
}
const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/ProductManger",{
    useNewUrlParser: true, 
    useUnifiedTopology: true,

})
.then(()=>console.log('Establish Your connections'))
.catch(()=>console.log('you still have a probelm in your connection'))
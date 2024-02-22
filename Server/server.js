const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser'); 
const app = express();
    
require("./config/productManger.config");
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyUserRoutes = require("./routes/ProductManger.routes");
AllMyUserRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
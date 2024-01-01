const SellerRoute = require("express").Router();
const SellerController = require("../controllers/SellerController.js");

SellerRoute.get("/getAll/:id", SellerController.getAll);
SellerRoute.get("/getOne/:id", SellerController.oneProduct);
SellerRoute.post("/addProduct", SellerController.add);
SellerRoute.put("/updateProduct/:id", SellerController.updateProduct);
SellerRoute.delete("/removeProduct/:id",  SellerController.remove);
SellerRoute.put("/updateProfile/:id", SellerController.checkpassword)

module.exports =SellerRoute;

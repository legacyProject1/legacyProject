const ClientRoute = require("express").Router();
const ClientController = require("../controllers/ClientController.js");

ClientRoute.get("/getAllProduct", ClientController.getAllProduct);
ClientRoute.get("/searchProductByName/:name", ClientController.searchProductByName);
ClientRoute.post("/UpdateClients", ClientController.checkpassword)
ClientRoute.get("/productByCategory/:category",ClientController.searchProductBycategory)

module.exports =ClientRoute;
const translateRoute = require("express").Router();
const controller = require("../../controllers/controllerAdmin/translate.controller.admin");

translateRoute.get("/getAllClients", controller.getAllClients);
translateRoute.get("/getAllSellers", controller.getAllSellers);
translateRoute.get("/getAllProducts", controller.getAllProducts);
translateRoute.post("/addProduct", controller.addProduct);
translateRoute.put("/updateRole/:id", controller.updateRole);
translateRoute.delete("/deleteProduct/:id", controller.deleteProduct);



module.exports = translateRoute;

const translateRoute = require("express").Router();
const controller = require("../../controllers/controllerAdmin/translate.controller.admin");
const mid=require('../../middleware/middleware')
translateRoute.get("/getAllClients",mid.verifyAdminToken,controller.getAllClients);
translateRoute.get("/getAllSellers",mid.verifyAdminToken, controller.getAllSellers);
translateRoute.get("/getAllProducts",mid.verifyAdminToken, controller.getAllProducts);
translateRoute.post("/addProduct", controller.addProduct);
translateRoute.put("/updateRole/:id", controller.updateRole);
translateRoute.delete("/deleteProduct/:id", controller.deleteProduct);
translateRoute.delete("/deleteUser/:id", controller.deleteUser);
translateRoute.post('/',controller.logAdmin)

translateRoute.get('/getAdmin',mid.verifyAdminToken,controller.getAdmin)
module.exports = translateRoute;

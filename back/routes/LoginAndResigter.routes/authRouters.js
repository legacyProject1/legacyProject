const translateRoute = require("express").Router();
const controllers = require("../../controllers/LoginAndResigterController/authController.js")
const mid=require('../../middleware/middleware.js')
translateRoute.post("/add", controllers.AddUser);
translateRoute.post("/register", controllers.registerUser);
translateRoute.get("/get", controllers.GetUsers);
translateRoute.post("/login", controllers.loginUser);
translateRoute.get("/getUser", mid.verifyToken,controllers.getUser);



module.exports = translateRoute;
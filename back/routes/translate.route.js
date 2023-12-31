const translateRoute = require("express").Router();
const controller = require("../controllers/translate.controller");






translateRoute.get("/getAll", controller.getAll);

module.exports = translateRoute;

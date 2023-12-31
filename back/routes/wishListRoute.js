const WishListRoute = require("express").Router();
const WishListController = require("../controllers/wishList.js");

WishListRoute.get("/getProductsOfUserInWishList/:id", WishListController.getProductsOfUserInWishList);
WishListRoute.post("/addProductToWishList", WishListController.addProductToWishList);
WishListRoute.delete("/deleteOneProductFromWishlist/:id", WishListController.deleteOneProductFromWishlist);
WishListRoute.delete("/deleteAllProductFromWishlist", WishListController.deleteAllProductFromWishlist);

module.exports = WishListRoute
const { Product, WishList } = require("../database-mysql/index.js");

module.exports.getProductsOfUserInWishList = (req, res) => {
  WishList.findAll({ where: { userId: req.params.id } })
    .then((result) => {
      const productIds = result.map((wishlistItem) => wishlistItem.productId);

      Product.findAll({ where: { id: productIds } })
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports.addProductToWishList = (req, res) => {
  WishList.create(req.body)
    .then((result) => {
      res.status(200).send("Successfully added to wishlist");
    })
    .catch((err) => {
      res.status(500).send("Failed to add to wishlist", err);
    });
};

module.exports.deleteOneProductFromWishlist = (req, res) => {
  WishList.destroy({ where: { productId: req.params.id } })
    .then(() => {
      res.status(200).json({ message: 'Product from wishlist has been deleted successfully' });
    })
    .catch((err) => {
      console.error('Error deleting product from wishlist:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

module.exports.deleteAllProductFromWishlist = (req, res) => {
  WishList.destroy({ where: {} })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

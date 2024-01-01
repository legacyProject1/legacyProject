const {Product , Cart } = require("../database-mysql/index.js");
 

module.exports.getProductsOfUserInCart = (req,res) => {
   Cart.findAll({ where:  {userId:req.params.id }}, {
  
})
.then((result)=>{
  const productIds = result.map((cart) => cart.productId);
    Product.findAll({where:{id:productIds}})
  .then((resultt)=>{res.status(200).json(resultt)})
  .catch((err)=>{res.status(500).json(err)})
 })
 .catch((err)=>{ res.status(500).send(err) })
};

module.exports.addProductToCart = (req,res) => {
  Cart.create(req.body)
  .then((result)=>{res.status(201).json({result:"successfully added to cart"})})
 .catch((err)=>{res.status(500).json({err:err})})
}
module.exports.getAllProduct = (req, res) => {
 Product.findAll()
 .then((result)=>{
    res.status(200).send(result)
 })
 .catch((err)=>{
   console.log(err);
  res.status(500).send(err)
 })
};


module.exports.deleteOneProduct = (req, res) => {

  Cart.destroy({ where: { productId: req.params.id } })

    .then(() => {
      res.status(200).json({ message: 'Product from cart has been deleted successfully' });
    })
    .catch((err) => {
      console.error('Error deleting product from cart :', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
};
module.exports.deleteAllProduct = (req, res) => {
   Cart.destroy({ where: {} })
     .then((result) => {
       res.status(200).json(result)
     })
     .catch((err) => {
       res.status(500).json({ error: err.message })
     })
 }
// Assuming you're using Express
module.exports.sendDiscountEmail = (req, res) => {
  const { userEmail } = req.params; 

  res.status(200).send("Discount email sent successfully");
};

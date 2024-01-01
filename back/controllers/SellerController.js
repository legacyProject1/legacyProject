const {User,Product } = require("../database-mysql/index");
const bcrypt = require('bcrypt');
 
const getAll = (req, res) => {
 Product.findAll()
 .then((result)=>{
    res.status(200).send(result)
 })
 .catch((err)=>{
  res.status(500).send(err)
 })
};
const oneProduct = (req, res) => {
  Product.findOne({where:{id:req.params.id}})
  .then((result)=>{
     res.status(200).send(result)
  })
  .catch((err)=>{
   res.status(500).send(err)
  })
 };

const add = (req, res) => {
 Product.create({
   name:req.body.name,
   price:req.body.price,
   description:req.body.description,
   unit:req.body.unit,
   category:req.body.category,
   images:req.body.images
 })
 .then((result)=>{
   res.status(200).send("Product created")
 })
 .catch((err)=>{
   res.status(500).send(err)})
};

const updateProduct = (req, res) => {
  Product.update({
   name:req.body.name,
   price:req.body.price,
   description:req.body.description,
   unit:req.body.unit,
   category:req.body.category,
   images:req.body.images
 }, {where:{id:req.params.id}})
 .then((result)=>{
   res.status(200).send("Product updated")
 })
 .catch((err)=>{
   res.status(500).send(err)})
};

const remove = (req, res) => {
  Product.destroy({where:{id:req.params.id}})
  .then((result)=>{
   res.status(200).send("product removed")
  })
  .catch((err)=>{
   res.status(500).send(err)
  })
};

const checkpassword= (req,res)=>{
  
      const userInfo =User.findOne({
        where: {
          email: req.body.email,
        }
      });

      if (!userInfo) {
        return res.status(404).json({
          status: 'error',
          message: 'User not found',
        });
      }
      const isPasswordValid =  bcrypt.compare(req.body.currentPassword, userInfo.password);

      if (!isPasswordValid) {

  
        
        return res.status(401).json({
          status: 'error',
          message: 'Incorrect current password',
        });
      }
      const hashedNewPassword = bcrypt.hash(req.body.newPassword, 10);
 User.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        adress: req.body.adress,
        email: req.body.email,
        password: hashedNewPassword,
 }, {where:{id:req.params.id}})
 .then((result)=>{
   res.status(200).send("profile updated")
  })
  .catch((err)=>{
   res.status(500).send(err)
  })
}

module.exports={getAll, oneProduct, add, updateProduct, remove, checkpassword }

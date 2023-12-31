const {User,Product } = require("../database-mysql/index");
const bcrypt = require('bcrypt');
 
const getAll = (req, res) => {
 Product.findAll({where:{userId:req.params.id}})
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
   images:req.body.images,
   userId:req.body.userId
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

const checkpassword= async(req,res)=>{
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  User.update({email:req.body.email,password:hashedPassword}, {where:{id:req.params.id}})
 .then((result)=>{
   res.status(200).send("profile updated")
  })
  .catch((err)=>{
   res.status(500).send(err)
  })
}

module.exports={getAll, oneProduct, add, updateProduct, remove, checkpassword }

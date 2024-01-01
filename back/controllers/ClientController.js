const {Product,sequelize,User} = require("../database-mysql/index.js");
const bcrypt=require('bcrypt')
module.exports. getAllProduct = (req, res) => {
 Product.findAll()
 .then((result)=>{
    res.status(200).send(result)
 })
 .catch((err)=>{
  res.status(500).send(err)
 })
};

module.exports.searchProductByName = (req, res) => {
  const {name} = req.params
  Product.findOne({where:{name}})
  .then((result)=>{
     res.status(200).send(result)
  })
  .catch((err)=>{
   res.status(500).send(err)
  })
};
module.exports.searchProductBycategory = (req, res) => {
  const {category} = req.params
  console.log(req.params.category);
  Product.findAll({where:{category}})
  .then((result)=>{
     res.status(200).send(result)
  })
  .catch((err)=>{
   res.status(500).send(err)
  })
};

module.exports.checkpassword=async (req,res)=>{
         
const hashedNewPassword = await bcrypt.hash(req.body.password, 10);
              
 
               await User.update({
                 firstName: req.body.firstName,
                 email: req.body.email,
                 password: hashedNewPassword,
                     adress:req.body.adress,
                     lastName:req.body.lastName
 
               }, {
                 where: { id: req.params.id }
               });
   
               res.json({
                 status: 'success'
               });
 
             
             
   
         }
 
  //  module.exports.ByCategory= async (req, res) => {
  //    try {
  //      const result = await Product.findAll({ where: { category: req.params.category } });
  //      if (result) {
  //        res.status(200).send(result);
  //      } else {
  //        res.status(404).send({ message: "Product not found in the specified category" });
  //      }
  //    } catch (err) {
  //      console.error(err);
  //      res.status(500).send({ message: "Internal Server Error" });
  //    }
  //  }
 
 
 

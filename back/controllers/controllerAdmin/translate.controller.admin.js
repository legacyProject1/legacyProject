// require your Model phrase here
const {User,Product} = require("../../database-mysql/index");


module.exports.getAllClients=(async(req,res)=>{
  try{
    const clients=await User.findAll({
      where:{role:'client'},
    })
    res.json(clients)
  } 
  catch(err){
    console.error(err)
    res.status(500).json(err)
  }
})
module.exports.getAllSellers=(async(req,res)=>{
  try{
    const sellers=await User.findAll({
      where:{role:'seller'},
    })
    res.json(sellers)
  } 
  catch(err){
    console.error(err)
    res.status(500).json(err)
  }
})
module.exports.getAllProducts=(async(req,res)=>{
  try{
    const products=await Product.findAll()
    res.json(products)
  } catch(err){
    console.error(err)
    res.status(500).json(err)
  }
})
module.exports.addProduct=(async(req,res)=>{
  const {name,price,description,unit,category,images}=req.body

  try{
    console.log(req.body);

    const newProduct = await Product.create({
      name,
      price,
      description,
      unit,
      category,
      images,
    });

    console.log(newProduct); 

    res.json({product:newProduct})
  } catch(err){
    console.error(err) 
    res.status(500).json(err)
  }
});

module.exports.updateRole=(async (req,res)=>{
  const{id}=req.params
  const{role}=req.body
  try{
    const users=await User.findByPk(id)
    if(!users){
      return res.status(404).json('users not found')
    }
    const validRoles=['admin','seller','client'];
    if(!validRoles.includes(role)){
      return res.status(400).json('Invalid role value')
    }
    await users.update({role},{fields:['role']})
    res.json({users:{id:users.id,role:users.role}})
  } catch(err){
    console.error(err)
    res.status(500).json(err)
  }
})


module.exports.deleteProduct=(async(req,res)=>{
  try{
    console.log(req.params.id);
    const currentProduct = await Product.findByPk(req.params.id)
    if(!currentProduct){
      return res.status(404).json('Product not found')
    }
    await currentProduct.destroy()
    console.log(currentProduct)
    res.json('Product deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})
module.exports.deleteUser=(async(req,res)=>{
  try{
    console.log(req.params.id);
    const currentUser= await User.findByPk(req.params.id)
    if(!currentUser){
      return res.status(404).json('user not found')
    }
    await currentUser.destroy()
    console.log(currentUser)
    res.json('user deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})
module.exports.addUser=(async(req,res)=>{
  const {firstName,lastName,adress,password,email,role}=req.body

  try{
    console.log(req.body);

    const newProduct = await User.create({
      firstName,
      lastName,
      adress,
      password,
      email,
      role
    });

    console.log(newProduct); 

    res.json({User:newProduct})
  } catch(err){
    console.error(err) 
    res.status(500).json(err)
  }
});



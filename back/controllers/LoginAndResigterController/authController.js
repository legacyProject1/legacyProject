const { User } = require("../../database-mysql/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AddUser = function (req, res) {

  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

const GetUsers = function (req, res) {
  User.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
const getUser=async function (req,res){
 let d=await User.findOne({where:{id:req.id}})
 res.json(d)
}

const generateToken = (id, firstName) => {
  const expiresIn = 60 * 60 * 24;
  return jwt.sign({ id, firstName }, "secretKey", { expiresIn: expiresIn });
};

const registerUser = async (req, res) => {

  const { firstName, lastName, email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
    };
    AddUser({ body: newUser }, res);
  } catch (error) {
    res.status(500).json({ error: "Error" });
  }
};

const loginUser = function (req, res) {
  User.findAll({
    where: {
      email: req.body.email,
    },
  })
    .then(async (result) => {
      const user = result[0].dataValues;
   
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );
  
      if (passwordMatch) {
    
        const token = generateToken(
          user.id,
          user.firstName + " " + user.lastName
        );
 
        res.json({ token, id: user.id,role:user.role  });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })

    .catch((err) => res.status(500).send(err));
};


module.exports = { AddUser, GetUsers, loginUser, registerUser,getUser };

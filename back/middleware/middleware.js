const jwt = require("jsonwebtoken");

const verifyToken=(req,res,next)=>{
    const token=req.headers['authorization']
    const t=token.split(" ")[1]
    if(!t){
        res.status(400).json('token not found')
    }
    jwt.verify(String(t),"secretKey",(err,user)=>{
        if(err){
            res.status(400).json(err)
        }
            req.id=user.id
    })
    next()
}
const verifyAminToken=(req,res,next)=>{
    const token=req.headers['authorization']
    const t=token.split(" ")[1]
    const decoded = jwt.verify(token, "secretKey");
    console.log(decoded,'/n',token);

}


module.exports={verifyToken,verifyAminToken}
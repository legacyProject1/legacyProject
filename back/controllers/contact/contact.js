const {Contact}=require('../../database-mysql/index')

module.exports={
    add:async (req,res)=>{
        let d =await Contact.create(req.body)
        res.status(200).json(d) 
    },
    get:async(req,res)=>{
        let d =await Contact.findAll()
        res.status(200).json(d)

    }
}
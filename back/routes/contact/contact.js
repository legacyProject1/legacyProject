const contactRouter=require('express').Router()
const contController=require('../../controllers/contact/contact')

contactRouter.post('/add',contController.add)
contactRouter.get('/get',contController.get)
module.exports =contactRouter
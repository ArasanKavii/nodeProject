const express = require('express')
const router = express.Router()
const authenticate  = require('../middleware/authenticate')
const controllers = require('../controllers/userController')
const controller = require('../controllers/orderController')
const upload =  require('../middleware/upload')
router.post('/register',controllers.register)
router.post('/login',controllers.login)
router.post('/upload/product',authenticate.authenticating,authenticate.admin,upload.single('Execl'),controllers.uploadproduct)
router.post('/orderplace',authenticate.authenticating,controller.orderplace)
router.put('/updateorder',authenticate.authenticating,controller.updateOrder)
router.delete('/deleteOrder',authenticate.authenticating,controller.deleteOrder)
router.get('/listOrder',authenticate.authenticating,controller.listorder)
router.get('/date',authenticate.authenticating,controller.date)
router.get('/listproduct',authenticate.authenticating,controller.listproduct)
module.exports =router  
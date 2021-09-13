const controllerOder = require('../controller/ControllerOrder')
const router = require('express').Router()
const verify = require('../Jwt/Verfiy')
const Admin    = require('../Jwt/isAdmin')

router.post('/order/order/', verify, controllerOder.CreateOrder)
router.get('/order/userid/', verify, controllerOder.ordershowUserid)
router.get('/order/order/:id/', controllerOder.ShowOrderId)
router.delete('/order/order/user/:id/', verify, controllerOder.removeOrderId)
router.post('/order/order/change/:id/',verify, Admin, controllerOder.Delivered)



router.post('/order/srarch/userId', verify, controllerOder.AddSearch)


module.exports = router
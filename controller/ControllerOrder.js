const OrderModel = require('../model/Order')
const Object = require('mongoose').Types.ObjectId


// create Order... 
exports.CreateOrder = async (req, res) => {

    const { timeOrder, orderItems, shippingAdress } = req.body
    try {


        let order = new OrderModel({
            user: req.user._id,
            timeOrder,
            orderItems,
            shippingAdress,
            paymentMethod: req.body.paymentMethod,
            itemsPrics: req.body.itemsPrics,
        })




        const newSave = await order.save()

        return res.status(201).json(newSave)


    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}



// show order id 
exports.ShowOrderId = async (req, res) => {
    if (!Object.isValid(req.params.id)) return res.status(404).json({ message: `id ${req.params.id}` })
    try {
        let order = await OrderModel.findById({ _id: req.params.id }).populate('user')
        if (order) return res.json(order)
        return res.status(404).json({ message: 'not have some order id ...' })
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}


// show order id only to user... 
exports.ordershowUserid = async (req, res) => {
    //  if (!Object.isValid(req.params.id)) return res.status(404).json({ message: `id ${req.params.id}` })

    try {
        let order = await OrderModel.find({ user: req.user._id }).populate('user')
        if (order) {


            return res.status(200).json(order)

        } else {
            return res.status(401).json('error')
        }
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}



// user remove order id ... 

exports.removeOrderId = async (req, res) => {
    try {
        let order = await OrderModel.findById({ _id: req.params.id })
        if (order && order.user.toString() === req.user._id.toString()) {
            await OrderModel.deleteOne({ _id: req.params.id })
            return res.status(201).json({ message: 'Remove Order Thank Your....' })
        } else {
            return res.json('not')
        }
    } catch (error) {

    }
}




// admin change order to deliver Delivered
exports.Delivered = async (req, res) => {
    if (!Object.isValid(req.params.id)) return res.status(404).json({ message: `id ${req.params.id}` })
    try {
        let order = await OrderModel.findById({ _id: req.params.id })
        if (order) {

            if (order.isDelivered) {
                order.isDelivered = false
                order.delivered = new Date()
                const saveOrder = await order.save()

                return res.status(201).json(saveOrder)
            } else {
                order.isDelivered = true
                order.delivered = new Date()
                const saveOrderx = await order.save()

                return res.status(201).json(saveOrderx)
            }



        } else {
            return res.status(201).json({ message: `not have order .... ` })
        }
    }
    catch (error) {
        return res.status(404).json({ message: error.message })
    }
}



//  search...
exports.AddSearch = async (req, res) => {
    const { addxp } = req.body
    try {
        let order = await OrderModel.find({ user: req.user._id }).populate('user').select('-password')
        if (order) {


            const xps = await OrderModel.find({ "orderItems.name" : addxp.toLowerCase() })

            if (xps) {

                return res.status(200).json(xps)

            } else {
                return res.status(404).json('vo')
            }


        } else {
            return res.status(401).json('error')
        }
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}
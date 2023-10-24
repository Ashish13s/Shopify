const orderService = require("../services/orderService.js");

const createOrder = async (req,res) => {
    const user = req.user;
    try {
        let createdOrder = await orderService.createOrder(user, req.body);
        return res.status(201).send(createdOrder);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

const findOrderById = async (req,res) => {
    try {
        let order = await orderService.findOrderById(req.params.id);
        return res.status(201).send(order);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

const orderHistory = async (req,res) => {
    const user = req.user;
    try {
        let order = await orderService.userOrderHistory(user._id);
        return res.status(201).send(order);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

module.exports = {
    createOrder,
    findOrderById,
    orderHistory,
};
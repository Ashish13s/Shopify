const orderService = require("../services/orderService.js")

const getAllOrders = async (req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

const confirmedOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.confirmedOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

const shippedOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.shipOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

const deliveredOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deliveredOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

const cancelledOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.cancelOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

const deletedOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deleteOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

module.exports = {
    getAllOrders,
    confirmedOrders,
    deletedOrders,
    deliveredOrders,
    shippedOrders,
    cancelledOrders,
}
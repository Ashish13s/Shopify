const cartService = require("../services/cart.service");
const Address = require("../models/address.model");
const Order = require("../models/order.model");
const OrderItem = require("../models/orderItems.model");

const createOrder = async (user, shipAddress) => {
  try {
    let address;
    if (shipAddress._id) {
      let existingAddress = await Address.findOne(shipAddress._id);
      address = existingAddress;
    } else {
      address = new Address(shipAddress);
      address.user = user;
      await address.save();

      user.address.push(address);
      await user.save();
    }

    const cart = await cartService.findUserCart(user._id);
    const orderItems = [];

    for (const item of cart.cartItems) {
      const orderItem = new OrderItem({
        price: item.price,
        product: item.product,
        quantity: item.quantity,
        size: item.size,
        userId: item.userId,
        discountedPrice: item.discountedPrice,
      });

      const createdOrderItem = await orderItem.save();
      orderItems.push(createdOrderItem);
    }

    const createdOrder = new Order({
      user: user._id,
      orderItems,
      totalPrice: cart.totalPrice,
      totalDiscountedPrice: cart.totalDiscountedPrice,
      discount: cart.discount,
      totalItem: cart.totalItem,
      shipAddress: address,
    });

    const saveOrder = await createdOrder.save();
    
    return saveOrder;
  } catch (error) {
    throw new Error(error.message);
  }
};

const placeOrder = async (orderId) => {
  try {
    const order = findOrderById(orderId);

    order.orderStatus = "PLACED";
    order.paymentDetails.status = "COMPLETED";

    return await order.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const confirmedOrder = async (orderId) => {
  try {
    const order = findOrderById(orderId);

    order.orderStatus = "CONFIRMED";

    return await order.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const shipOrder = async (orderId) => {
  try {
    const order = findOrderById(orderId);

    order.orderStatus = "SHIPPED";

    return await order.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const deliveredOrder = async (orderId) => {
  try {
    const order = findOrderById(orderId);

    order.orderStatus = "DELIVERED";

    return await order.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const cancelOrder = async (orderId) => {
  try {
    const order = findOrderById(orderId);

    order.orderStatus = "CANCEL";

    return await order.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const findOrderById = async (orderId) => {
  try {
    const order = await Order.findById(orderId)
      .populate("user")
      .populate({ path: "orderItems", populate: { path: "product" } })
      .populate("shippingAddress");

    return order;
  } catch (error) {
    throw new Error(error.message);
  }
};

const userOrderHistory = async (userId) => {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "produxt" } })
      .lean();
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllOrders = async (userId) => {
  try {
    return await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "produxt" } })
      .lean();
  } catch (error) {
    throw new Error(error.message);
  }
};
const deleteOrder = async (orderId) => {
  try {
    const order = await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createOrder,
  placeOrder,
  confirmedOrder,
  shipOrder,
  deliveredOrder,
  cancelOrder,
  findOrderById,
  userOrderHistory,
  getAllOrders,
  deleteOrder,
};

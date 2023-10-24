const CartItem = require("../models/cartItem.model");
const userService = require("../services/user.service");

const updateCartItem = async (userId, cartItemId, cartItemData) => {
    try{
        const item  = await findCartItemById(cartItemId);
        if(!item){
            throw new Error("cart item not found: ", cartItemId);
        }
        const user = await userService.findUserById(item.userId);
        if(!user){
            throw new Error("user not found: ", userId);
        }
        if(userId.toString() === user._id.toString()){
            item.quantity = cartItemData.quantity;
            item.price = item.quantity*item.product.price;
            item.discountedPrice = item.quantity*item.product.discountedPrice;
            
            const updatedCartItem = await item.save();
            return updatedCartItem;
        }
        else{
            throw new Error("You can't update this cart item");
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

const removeCartItem = async (userId, cartItemId) => {
    try {
        const user = await userService.findUserById(userId);

        if(user._id.toString() === userId.toString()){
           return await CartItem.findByIdAndDelete(cartItemId);
        }
        else{
            throw new Error("You can't remove this cart item")
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

const findCartItemById = async(cartItemId) => {
    try{
        const cartItem  = await CartItem.findById(cartItemId).populate("product");
        if(cartItem){
            return cartItem;
        }
        else {
            throw new Error("cartitem not found with id ", cartItemId);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {updateCartItem, removeCartItem, findCartItemById};
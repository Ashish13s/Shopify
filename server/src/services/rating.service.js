const Rating = require("../models/rating.model.js");
const productService = require("../services/product.service.js");

const createRating = async (req, user) => {
    try {
        const product = await productService.findProductById(req.productId);

    const rating = new Rating({
        user: user._id,
        product: product._id,
        rating: req.rating,
        createdAt: new Date(),
    })
    return await rating.save();
    } catch (error) {
        throw new Error(error.message);
    }
};

const getProductRating = async (productId) => {
    try{
        return await Rating.find({product: productId});
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createRating,
    getProductRating
}
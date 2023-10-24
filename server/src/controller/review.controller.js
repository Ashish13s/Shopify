const reviewService = require("../services/review.service");

const createReview = async (req, res) => {
    const user = req.user;
    try {
        const review = await reviewService.createReview(req.body, user);
        res.status(201).send(review);
    } catch (error) {
        res.status(500).send({error:error.message});
    }
};

const getAllReview = async (req, res) => {
    const productId = req.params.productId;
    try {
        const reviews = reviewService.getAllReview(productId);
        res.status(201).send(reviews);
    } catch (error) {
        res.status(500).send({error:error.message});
    }
};

module.exports = {
    createReview,
    getAllReview,
};
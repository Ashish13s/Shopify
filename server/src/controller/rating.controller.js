const ratingService = require("../services/rating.service");

const createRating = async (req, res) => {
    const user = req.user;
    try {
        const rating = await ratingService.createRating(req.body, user);
        res.status(201).send(rating);
    } catch (error) {
        res.status(500).send({error:error.message});
    }
};

const getAllRatings = async (req, res) => {
    const productId = req.params.productId;
    try {
        const ratings = ratingService.getAllRatings(productId);
        res.status(201).send(ratings);
    } catch (error) {
        res.status(500).send({error:error.message});
    }
};

module.exports = {
    createRating,
    getAllRatings,
};
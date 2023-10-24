const Razorpay = require("razorpay")

require('dotenv').config()
const key_id = process.env.KEY_ID;
const key_secret = process.env.KEY_SECRET;

const razorpay = new Razorpay({
    key_id: key_id,
    key_secret: key_secret
});

module.exports = razorpay;
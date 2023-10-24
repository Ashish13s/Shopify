const app = require(".");
const { connectDb } = require("./config/db");
require("dotenv").config
const PORT = process.env.PORT || 5000;

app.listen(PORT, async() => {
    await connectDb();
    console.log("Shopify API listening on PORT: ", PORT);
})
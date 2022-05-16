const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        brand: String,
        category: String,
        buy_price: Number,
        sale_price: Number,
        presentation: String,
        stock: Number
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export default mongoose.model("Product", productSchema);
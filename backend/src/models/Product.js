const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        brand: String,
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
        },
        buy_price: Number,
        sale_price: Number,
        presentation: String,
        stock: Number,
        img_url: String
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export default mongoose.model("Product", productSchema);
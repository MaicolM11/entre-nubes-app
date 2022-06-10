const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        brand: String,
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        buy_price: {
            type: Number,
            required: true
        },
        sale_price:  {
            type: Number,
            required: true
        },
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
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
        stock: {
            type: Number,
            default: 0
        },
        img_url: String,
        isNotify: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: false,
        versionKey: false,
    }
    );

export default mongoose.model("Product", productSchema);
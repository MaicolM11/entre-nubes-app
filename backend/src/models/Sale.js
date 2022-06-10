const mongoose = require("mongoose");

const saleSchema = mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
        quantity: Number,
        buy_price: {
            type: Number,
            required: true
        },
        sale_price:  {
            type: Number,
            required: true
        }
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export default mongoose.model("Sale", saleSchema);
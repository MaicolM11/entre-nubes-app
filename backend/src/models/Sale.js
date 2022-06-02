const mongoose = require("mongoose");

const saleSchema = mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
        quantity: Number,
        profit: Number,
        status: {
            type: String,
            enum : ['DUE', 'PAID', 'CREDIT'],
            default: 'DUE'
        },
        locationID: String // MESA 1, 
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export default mongoose.model("Sale", saleSchema);
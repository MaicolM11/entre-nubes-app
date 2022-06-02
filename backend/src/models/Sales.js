const mongoose = require("mongoose");

const salesSchema = mongoose.Schema(
    {
        sales: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Sale",
        }],
        date: Date
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export default mongoose.model("Sales", salesSchema);
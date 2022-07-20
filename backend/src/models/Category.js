const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
        },
        minimum_quantities: Number
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export default mongoose.model("Category", categorySchema);
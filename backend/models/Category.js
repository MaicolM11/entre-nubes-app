const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
    {
        name: String
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export default mongoose.model("Category", categorySchema);
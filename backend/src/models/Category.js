const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
        }
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export default mongoose.model("Category", categorySchema);
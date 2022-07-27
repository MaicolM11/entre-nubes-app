const mongoose = require('mongoose');

const reportSchema = mongoose.Schema(
    {
        total: Number,
        subtotal: Number,
        profit: Number, 
        start_date: Date,
        end_date: Date
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export default mongoose.model("Report", reportSchema);
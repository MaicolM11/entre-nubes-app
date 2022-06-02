const mongoose = require("mongoose");

const debtorSchema = mongoose.Schema(
    {
        name: String,
        cc: String,
        phone: String,
        debts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Sale",
        }]
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export default mongoose.model("Debtor", debtorSchema);
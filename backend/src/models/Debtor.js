const mongoose = require("mongoose");

const debtorSchema = mongoose.Schema(
    {
        fullname: String,
        cc: String,
        phone: String,
        debts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "last_bills",
        }]
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export default mongoose.model("Debtor", debtorSchema);
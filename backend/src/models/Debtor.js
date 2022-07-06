const mongoose = require("mongoose");

const debtorSchema = mongoose.Schema(
    {
        fullname: String,
        cc: String,
        phone: String,
        debts:  [{
            _id : false, 
            collection: { type: String, default: 'last_bills' },
            item: { type: mongoose.Schema.Types.ObjectId, refPath: 'debts.collection' }
        }]
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export default mongoose.model("Debtor", debtorSchema);
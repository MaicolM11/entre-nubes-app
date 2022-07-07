const mongoose = require("mongoose");

const debtorSchema = mongoose.Schema(
    {
        fullname: String,
        cc: {
            type: String,
            unique: true,
            required: true
        },
        phone: String,
        debts:  [{
            _id : false, 
            reference: { type: String, default: 'last_bills' },
            item: { type: mongoose.Schema.Types.ObjectId, refPath: 'debts.reference' }
        }]
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export default mongoose.model("Debtor", debtorSchema);
const mongoose = require("mongoose");

import { BILL_STATES } from "./Enums";

const billSchema = mongoose.Schema(
    {
        sales: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Sale",
        }],

        date: {
            type: Date,
            default: new Date()
        },

        status: {
            type: String,
            enum: Object.keys(BILL_STATES),
            default: BILL_STATES.DUE
        },

        description: String,
        
        total: Number,

        subtotal: Number,

        salesman: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }

    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export const BillRecord = mongoose.model("bills", billSchema);

export default mongoose.model("last_bills", billSchema);
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

        description: String

    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export default mongoose.model("Bill", billSchema);
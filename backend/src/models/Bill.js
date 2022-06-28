const mongoose = require("mongoose");

import { BILL_STATES, PAYMENT_METHODS } from "./Enums";

const billSchema = mongoose.Schema(
    {
        sales: [{
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
            quantity: {
                type: Number,
                required: true
            },
            buy_price: {
                type: Number,
                required: true
            },
            sale_price:  {
                type: Number,
                required: true
            }
        }],

        date: {
            type: Date,
            default: new Date()
        },

        status: {
            type: String,
            enum: Object.values(BILL_STATES),
            default: BILL_STATES.DUE
        },

        location: String,
        
        total: Number,

        subtotal: Number,

        salesman: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

        payment_method: {
            type: "string",
            enum: Object.values(PAYMENT_METHODS)
        }

    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export const BillRecord = mongoose.model("bills", billSchema);

export default mongoose.model("last_bills", billSchema);
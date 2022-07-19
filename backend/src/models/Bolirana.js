const mongoose = require('mongoose');

import { BOLIRANAS_STATES } from './Enums';

const boliranaSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            unique: true
        },
        state: {
            type: String,
            enum: {
                values: Object.values(BOLIRANAS_STATES),
                message: "'{VALUE}' is not support"
            },
            default: BOLIRANAS_STATES.AVAILABLE
        },
        init_time: Number,
        time: Number
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export default mongoose.model("Bolirana", boliranaSchema);
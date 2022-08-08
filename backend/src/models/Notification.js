const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema(
    {
        type: String,
        message: String,
        date: {
            type: Number,
        }, 
        new: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export default mongoose.model("Notification", notificationSchema);
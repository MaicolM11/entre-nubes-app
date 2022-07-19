const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema(
    {
        type: String,
        message: String,
        date: {
            type: Number,
            default: new Date().getTime()
        }
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

export default mongoose.model("Notification", notificationSchema);
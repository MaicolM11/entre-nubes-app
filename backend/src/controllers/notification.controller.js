import Notification from "../models/Notification";

export const createNotification = async (data) => {
    await Notification.create(data);
    const notifications = await Notification.find();
    global.sockets.emit("notifications", notifications)
}
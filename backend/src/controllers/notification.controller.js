import Notification from "../models/Notification";

export const createNotification = async (data) => {
    await Notification.create(data);
    notify()
}

export const notify = () => {
    Notification.find()
        .then(data => global.sockets.emit("notifications", data))
}

export const deleteById = (req, res) => {
    const { id } = req.params;
    Notification.findByIdAndDelete(id)
        .then(doc => res.sendStatus(doc ? 200 : 404))
        .catch(error => res.status(400).json({ message: error.message }))
    notify();
}

export const markAsRead = (req, res) => {
    Notification.updateMany({}, {new: false})
        .then(values => res.sendStatus(200))
        .catch(error => res.status(400).json({ message: error.message }))
}
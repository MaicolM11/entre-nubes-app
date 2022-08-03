import Notification from "../models/Notification";

export const createNotification = async (data) => {
    await Notification.create(data);
    notify()
}

export const notify = (socket = global.sockets) => {
    Notification.find()
        .sort({date: -1})
        .then(data => {
            let news = data.filter(x => x.new).length;
            socket.emit("notifications", { news: news, data: data})
        })
}

export const deleteById = (req, res) => {
    const { id } = req.params;
    Notification.findByIdAndDelete(id)
        .then(doc => res.sendStatus(doc ? 200 : 404))
        .then(() => notify())
        .catch(error => res.status(400).json({ message: error.message }))
}

export const markAsRead = (req, res) => {
    Notification.updateMany({}, {new: false})
        .then(values => res.sendStatus(200))
        .then(() => notify())
        .catch(error => res.status(400).json({ message: error.message }))
}
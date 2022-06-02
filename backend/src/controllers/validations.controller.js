export const productValidator = (data) => {

}

export const categoryValidator = (data, res) => {
    const { name } = data;
    if (name && typeof name === 'string' && name.trim() !== '') {
        return { name: name };
    }
    sendError(res);
}

const sendError = (res) => {
    res.status(422).json({ message: 'Invalid argument exception' })
}
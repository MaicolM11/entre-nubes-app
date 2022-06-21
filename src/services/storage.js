export const getToken = () => {
    return 'Bearer ' + localStorage.getItem("token");
}

export const getFullname = () => {
    return localStorage.getItem("fullname")
}
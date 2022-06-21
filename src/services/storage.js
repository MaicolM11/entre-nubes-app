export const getToken = () => {
    return 'Bearer ' + localStorage.getItem("token");
}

export const getFullname = () => {
    return localStorage.getItem("fullname")
}

export const getRole = () => {
    return localStorage.getItem("rol");
}

// logout
export const clearLocalStorage = () => {
    localStorage.clear();
}
export const reqLogin = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            'email': username,
            'password': password
        })
    };
    return fetch('/auth/login', requestOptions);
};
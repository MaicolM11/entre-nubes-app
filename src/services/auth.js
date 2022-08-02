export const reqLogin = (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: username,
      password: password,
    }),
  };
  return fetch("/api/auth/login", requestOptions);
};

export const LoginStart = (userCredentials) => ({
    type: "LOGGING_START",
});

export const LoginSuccess = (user) => ({
    type: "LOGGING_SUCCESS",
    payload: user,
})

export const LoginFailure = (error) => ({
    type: "LOGGING_FAILURE",
    payload: error,
})
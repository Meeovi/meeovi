
const { data, error } = await authClient.twoFactor.enable({
    password: "secure-password", // required
    issuer: "my-app-name",
});
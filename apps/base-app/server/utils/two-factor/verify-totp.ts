
const { data, error } = await authClient.twoFactor.verifyTotp({
    code: "012345", // required
    trustDevice: true,
});
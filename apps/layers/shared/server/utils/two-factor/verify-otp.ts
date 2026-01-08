
const { data, error } = await authClient.twoFactor.verifyOtp({
    code: "012345", // required
    trustDevice: true,
});
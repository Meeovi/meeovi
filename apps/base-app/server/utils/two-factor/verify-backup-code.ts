
const { data, error } = await authClient.twoFactor.verifyBackupCode({
    code: "123456", // required
    disableSession: false,
    trustDevice: true,
});
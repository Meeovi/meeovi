
const { data, error } = await authClient.twoFactor.sendOtp({
    trustDevice: true,
});
if (data) {
    // redirect or show the user to enter the code
}

const { data, error } = await authClient.twoFactor.disable({
    password, // required
});

const { data, error } = await authClient.twoFactor.getTotpUri({
    password, // required
});
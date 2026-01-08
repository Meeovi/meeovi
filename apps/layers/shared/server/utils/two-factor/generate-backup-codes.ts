
const { data, error } = await authClient.twoFactor.generateBackupCodes({
    password, // required
});
if (data) {
    // Show the backup codes to the user
}
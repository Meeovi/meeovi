import {
  inferAdditionalFields,
  adminClient,
  twoFactorClient,
  usernameClient,
  phoneNumberClient,
  magicLinkClient,
  emailOTPClient,
  deviceAuthorizationClient,
  multiSessionClient
} from "better-auth/client/plugins";
import { polarClient } from "@polar-sh/better-auth/client";
import { passkeyClient } from "@better-auth/passkey/client";
import {
  createAuthClient
} from "better-auth/vue";
import type {
  auth
} from "../../../layers/auth-app/server/utils/auth"

export const authClient = createAuthClient({
  plugins: [
    inferAdditionalFields < typeof auth > (), 
    adminClient(),
    usernameClient(),
    phoneNumberClient(),
    magicLinkClient(),
    emailOTPClient(),
    passkeyClient(),
    multiSessionClient(),
    polarClient(),
    deviceAuthorizationClient(),
    twoFactorClient({ 
            onTwoFactorRedirect(){ 
                globalThis.location.href = "/2fa" // Handle the 2FA verification redirect
            } 
        })
  ],
});

export const google = async () => {
    await authClient.signIn.social({
        provider: "google"
    })
}

export const github = async () => {
    await authClient.signIn.social({
        provider: "github"
    })
}

export const microsoft = async () => {
  await authClient.signIn.social({
    provider: "microsoft",
    callbackURL: "/dashboard", // The URL to redirect to after the sign in
  });
};

export const twitter = async () => {
    await authClient.signIn.social({
        provider: "twitter"
    })
}

export const facebook = async () => {
    await authClient.signIn.social({
        provider: "facebook"
    })
}

export const {
  signIn,
  signOut,
  signUp,
  useSession,
  forgetPassword,
  resetPassword,
  deleteUser
} = authClient;

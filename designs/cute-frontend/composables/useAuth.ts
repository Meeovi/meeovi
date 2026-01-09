import {
    useMutation,
    useQuery
} from '@vue/apollo-composable';
import {
    useCookie
} from '#app';
import gql from 'graphql-tag';

/* LOGIN MUTATION */
const LOGIN_MUTATION = gql`
mutation LogIn($emailAddress: String!, $password: String!, $rememberMe: Boolean!) {
  login(username: $emailAddress, password: $password, rememberMe: $rememberMe) {
    ... on CurrentUser {
      id
      identifier
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
`;

/* REGISTER MUTATION */
const REGISTER_MUTATION = gql`
mutation Register($input: RegisterCustomerInput!) {
  registerCustomerAccount(input: $input) {
    ... on Success {
      success
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
`;

/* LOGOUT MUTATION */
const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout {
      success
    }
  }
`;

/* GET ACTIVE CUSTOMER */
const GET_ACTIVE_CUSTOMER = gql`
  query {
    activeCustomer {
      id
      emailAddress
    }
  }
`;

/* FORGOT PASSWORD */
const REQUEST_PASSWORD_RESET_MUTATION = gql`
mutation RequestPasswordReset($emailAddress: String!) {
  requestPasswordReset(emailAddress: $emailAddress) {
    ... on Success {
      success
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
`;

/* RESET PASSWORD */
const RESET_PASSWORD_MUTATION = gql`
mutation ResetPassword($token: String!, $password: String!) {
  resetPassword(token: $token, password: $password) {
    ...on CurrentUser {
      id
      identifier
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
`;

export function useAuth() {
    // 🔹 Ensure token is properly typed
    const token = useCookie < string | null > ('vendure_token') as Ref < string | null > ;

    /* REGISTER FUNCTION */
    const register = async (input: {
        emailAddress: string;password: string;firstName ? : string;lastName ? : string
    }) => {
        const {
            mutate
        } = useMutation(REGISTER_MUTATION);
        const result = await mutate({
            input
        });

        if (result?.data?.registerCustomerAccount?.success) {
            return {
                success: true
            };
        }
        return {
            success: false,
            message: result?.data?.registerCustomerAccount?.message
        };
    };

    /* LOGIN FUNCTION */
    const login = async (emailAddress: string, password: string, rememberMe: boolean = false) => {
        const {
            mutate
        } = useMutation(LOGIN_MUTATION);
        const result = await mutate({
            emailAddress,
            password,
            rememberMe
        });

        if (result?.data?.login?.id) {
            token.value = result.data.login.id;
            return {
                success: true,
                user: result.data.login
            };
        }
        return {
            success: false,
            message: result?.data?.login?.message
        };
    };

    /* LOGOUT FUNCTION */
    const logout = async () => {
        const {
            mutate
        } = useMutation(gql`mutation Logout { logout { success } }`);
        await mutate();
        token.value = null;
    };

    /* GET SESSION */
    const getSession = () => {
        const {
            result
        } = useQuery(GET_ACTIVE_CUSTOMER);
        return result.value?.activeCustomer || null;
    };

    /* FORGOT PASSWORD FUNCTION */
    const forgotPassword = async (emailAddress: string) => {
        const {
            mutate
        } = useMutation(REQUEST_PASSWORD_RESET_MUTATION);
        const result = await mutate({
            emailAddress
        });
        return result?.data?.requestPasswordReset?.success || false;
    };

    /* RESET PASSWORD FUNCTION */
    const resetPassword = async (token: string, password: string) => {
        const {
            mutate
        } = useMutation(RESET_PASSWORD_MUTATION);
        const result = await mutate({
            token,
            password
        });
        return result?.data?.resetPassword?.success || false;
    };

    return {
        register,
        login,
        logout,
        getSession,
        forgotPassword,
        resetPassword,
    };
}
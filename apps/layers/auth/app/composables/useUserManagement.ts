import { useToast } from '#imports';
import { authClient } from '../../../../base-app/lib/auth-client';
import { ref } from 'vue'
import type { usersModel as User } from '../../../../base-app/prisma/generated/models/users';

type AuthRole = 'user' | 'admin' | ('user' | 'admin')[]
type UserCreate = Pick<User, 'name' | 'email' | 'image' | 'emailVerified' | 'banned'> & { password: string, role?: AuthRole, firstName: string, lastName: string }

type Error = {
    message: string
}
const toast = useToast()
const users = ref<User[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)
export const useUserManagement = () => {

    const fetchUsers = async () => {
        try {
            isLoading.value = true
            const fetchedUsers = await authClient.admin.listUsers({
                query: {
                    limit: 10,
                }
            });
            users.value = fetchedUsers.data?.users as unknown as User[] || [];

        } catch (err) {
            toast.show({
                title: "Error",
                message: (err as Error).message || "Failed to fetch users",
                color: 'red',
            });

        } finally {
            isLoading.value = false
        }
    }

    const createUserAsAdmin = async (user: UserCreate) => {
        try {
            isLoading.value = true;
            await authClient.admin.createUser({
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role,
                data: {
                    // any additional on the user table including plugin fields and custom fields
                    firstName: user.firstName,
                    lastName: user.lastName,
                    emailVerified: user.emailVerified,
                    banned: user.banned,
                    image: user.image,
                }
            });
            toast.show({
                title: "Success",
                message: "User created successfully",
                color: 'green',
            })

        } catch (err) {
            toast.show({
                title: "Error",
                message: (err as Error).message || "Failed to create user",
                color: 'red',
            });
        } finally {
            isLoading.value = false
        }
    }

    const deleteUser = async (userId: string) => {
        try {
            isLoading.value = true;
            await authClient.admin.removeUser({
                userId
            });
            toast.show({
                title: "Success",
                message: "User deleted successfully",
                color: 'green',
            });

        } catch (error: any) {
            toast.show({
                title: "Error",
                message: error.message || "Failed to delete user",
                color: 'red',
            });
        } finally {
            isLoading.value = false;
        }
    }

    const updateUserRole = async (userId: string, role: AuthRole) => {
        try {
            isLoading.value = true;
            await authClient.admin.setRole({
                userId,
                role
            });

            toast.show({
                title: "Success",
                message: "Updated user role successfully",
                color: 'green',
            });

        } catch (err) {
            toast.show({
                title: "Error",
                message: (err as Error).message || "Failed to update user role",
                color: 'red',
            });
        } finally {
            isLoading.value = false;
        }
    }

    const impersonateUser = async (userId: string) => {
        try {
            isLoading.value = true;
            await authClient.admin.impersonateUser({
                userId
            });
        } catch (err) {
            toast.show({
                title: "Error",
                message: (err as Error).message || "Failed to impersonate user",
                color: 'red',
            });
        } finally {
            isLoading.value = false;
        }
    }

    const updateUserBan = async (userId: string, banUser: boolean) => {
        try {
            isLoading.value = true;
            if (banUser) {
                await authClient.admin.banUser({
                    userId
                });
            } else {
                await authClient.admin.unbanUser({
                    userId
                });
            }

            toast.show({
                title: "Success",
                message: `Updated user ban status successfully`,
                color: 'green',
            });

        } catch (err) {
            toast.show({
                title: "Error",
                message: (err as Error).message || "Failed to ban user",
                color: 'red',
            });
        } finally {
            isLoading.value = false;
        }
    }


    return {
        users,
        isLoading,
        error,
        fetchUsers,
        deleteUser,
        updateUserRole,
        updateUserBan,
        createUserAsAdmin,
        impersonateUser
    }
}
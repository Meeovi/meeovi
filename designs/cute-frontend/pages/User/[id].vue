<template>
    <div>
            <v-card class="settingsCard">
                <v-toolbar color="primary">
                    <v-toolbar-title>Account Overview</v-toolbar-title>
                </v-toolbar>
                <div class="d-flex flex-row">
                    <v-tabs class="settingsLeft" v-model="tab" direction="vertical" color="primary">
                        <h5>Projects</h5>
                        <v-tab value="option-1">
                            <v-icon start>
                                mdi-account
                            </v-icon>
                            Account
                        </v-tab>
                        <v-tab value="option-2">
                            <v-icon start>
                                mdi-lock
                            </v-icon>
                            Orders
                        </v-tab>
                        <h5>Account</h5>
                        <v-tab value="option-3">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            My Designers
                        </v-tab>
                        <v-tab value="option-4">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            My Hearts
                        </v-tab>
                        <v-tab value="option-5">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            My Reviews
                        </v-tab>
                        <v-tab value="option-6">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            My Wish List
                        </v-tab>
                        <v-tab value="option-7">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            <a href="/">Logout</a>
                        </v-tab>
                    </v-tabs>
                    <v-window v-model="tab" class="settingsRight">
                        <v-window-item value="option-1">
                            <v-card flat>
                                <account />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-2">
                            <v-card flat>
                                <orders />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-3">
                            <v-card flat>
                                <loyalty />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-4">
                            <v-card flat>
                                <reviews />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-5">
                            <v-card flat>
                                <wishlists />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-6">
                            <v-card flat>
                                <designers />
                            </v-card>
                        </v-window-item>
                    </v-window>
                </div>
            </v-card>
    </div>
</template>

<script>
    import account from '~/components/user/account.vue'
    import orders from '~/components/user/orders.vue'
    import loyalty from '~/components/user/loyalty.vue'
    import reviews from '~/components/user/reviews.vue'
    import wishlists from '~/components/user/wishlists.vue'
    import designers from '~/components/user/designers.vue'

    export default {
        components: {
            account,
            orders,
            loyalty,
            reviews,
            wishlists,
            designers,
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Account',
    })
</script>

<style scoped>

</style>
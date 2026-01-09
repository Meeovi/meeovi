<template>
    <v-card>
        <v-tabs bg-color="primary" align-tabs="center">
            <v-tab>
                <v-menu open-on-hover :location="location" transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn variant="text" size="x-small" v-bind="props" href="/categories/">What's New</v-btn>
                    </template>
                    <v-list>
                        <v-list-item title="" value="" href="/categories/"></v-list-item>
                        <v-list-item title="" value="" href="/categories/">
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-tab>
            <v-tab>
                <v-menu open-on-hover :location="location" transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn variant="text" size="x-small" v-bind="props" href="/categories/">Our Favorites</v-btn>
                    </template>
                    <v-list>
                        <v-list-item title="" value="" href="/categories/"></v-list-item>
                        <v-list-item title="" value="" href="/categories/">
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-tab>
            <v-tab>
                <v-menu open-on-hover :location="location" transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn variant="text" size="x-small" v-bind="props" href="/categories/">Designers</v-btn>
                    </template>
                    <v-list>
                        <v-list-item title="" value="" href="/categories/"></v-list-item>
                        <v-list-item title="" value="" href="/categories/">
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-tab>
            <v-tab>
                <v-menu open-on-hover :location="location" transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn variant="text" size="x-small" v-bind="props" href="/categories/">Clothing</v-btn>
                    </template>
                    <v-list>
                        <v-list-item title="" value="" href="/categories/"></v-list-item>
                        <v-list-item title="" value="" href="/categories/">
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-tab>
            <v-tab>
                <v-menu open-on-hover :location="location" transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn variant="text" size="x-small" v-bind="props" href="/categories/">Active</v-btn>
                    </template>
                    <v-list>
                        <v-list-item title="" value="" href="/categories/"></v-list-item>
                        <v-list-item title="" value="" href="/categories/">
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-tab>
            <v-tab>
                <v-menu open-on-hover :location="location" transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn variant="text" size="x-small" v-bind="props" href="/categories/">Shoes</v-btn>
                    </template>
                    <v-list>
                        <v-list-item title="" value="" href="/categories/"></v-list-item>
                        <v-list-item title="" value="" href="/categories/">
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-tab>
            <v-tab>
                <v-menu open-on-hover :location="location" transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn variant="text" size="x-small" v-bind="props" href="/categories/">Bags</v-btn>
                    </template>
                    <v-list>
                        <v-list-item title="" value="" href="/categories/"></v-list-item>
                        <v-list-item title="" value="" href="/categories/">
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-tab>
            <v-tab>
                <v-menu open-on-hover :location="location" transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn variant="text" size="x-small" v-bind="props" href="/categories/">Accessories</v-btn>
                    </template>
                    <v-list>
                        <v-list-item title="" value="" href="/categories/"></v-list-item>
                        <v-list-item title="" value="" href="/categories/">
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-tab>
            <v-tab>
                <v-menu open-on-hover :location="location" transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn variant="text" size="x-small" v-bind="props" href="/categories/">Beauty</v-btn>
                    </template>
                    <v-list>
                        <v-list-item title="" value="" href="/categories/"></v-list-item>
                        <v-list-item title="" value="" href="/categories/">
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-tab>
            <v-tab><v-btn variant="text" size="x-small" v-bind="props" href="https://www.shopncute.com">Women</v-btn></v-tab>
            <v-tab><search /></v-tab>
        </v-tabs>
    </v-card>
</template>

<script>
import search from '../Search/search.vue'

    export default {
        components: { search },
        data: () => ({
            location: 'bottom',
            tab: null,
        }),
    }
</script>
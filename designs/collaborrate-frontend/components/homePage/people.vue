<template>
    <div>
        <v-card>
            <v-tabs v-model="tab" bg-color="primary">
                <v-tab value="one">Recent Collaborators</v-tab>
                <v-tab value="two">Frequent Collaborators</v-tab>
                <v-tab value="three">Favorite Collaborators</v-tab>
                <v-tab value="four">
                    <browseteams />
                </v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="one">
                        <v-avatar icon="fas fa-plus" size="80"></v-avatar>
                        <a href="" class="peoplelist"><v-avatar size="80" image="https://cdn.vuetifyjs.com/images/john.jpg"></v-avatar></a>
                    </v-window-item>

                    <v-window-item value="two">
                        <v-avatar icon="fas fa-plus" size="80"></v-avatar>
                        <a href="" class="peoplelist"><v-avatar size="80" image="https://cdn.vuetifyjs.com/images/john.jpg"></v-avatar></a>
                    </v-window-item>

                    <v-window-item value="three">
                        <v-avatar icon="fas fa-plus" size="80"></v-avatar>
                        <a href="" class="peoplelist"><v-avatar size="80" image="https://cdn.vuetifyjs.com/images/john.jpg"></v-avatar></a>
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import browseteams from './browseteams.vue'

    export default {
        components: {
            browseteams
        },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>

</script>
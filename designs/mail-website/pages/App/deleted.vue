<template>
    <v-card>
        <v-toolbar color="primary">
            <v-toolbar-title>Deleted Items</v-toolbar-title>
        </v-toolbar>
        <div class="d-flex flex-row">
            <v-tabs v-model="tab" direction="vertical" color="primary">
                <v-tab value="option-1">
                    <v-icon start>
                        mdi-account
                    </v-icon>
                    Option 1
                </v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item value="option-1">
                    <v-card flat>
                        <v-card-text>
                            <p>
                                Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat
                                lorem non metus. Sed a libero.
                            </p>

                            <p>
                                Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus,
                                bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis.
                                Suspendisse non nisl sit amet velit hendrerit rutrum.
                            </p>

                            <p class="mb-0">
                                Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor,
                                tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
                            </p>
                        </v-card-text>
                    </v-card>
                </v-window-item>
            </v-window>
        </div>
    </v-card>
</template>

<script>
    export default {
        data: () => ({
            tab: '1',
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Meeovi Mail - Deleted Items',
    })
</script>
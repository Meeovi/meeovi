<template>
    <div class="homePage">
        <v-row>
            <v-col cols="12">
                <v-sheet class="mx-auto">
                    <h3>Latest Projects</h3>
                    <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                        <v-slide-group-item v-for="n in 10" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
                            <v-card color="grey-lighten-1" :class="['ma-4', selectedClass]" height="300" width="300"
                                @click="toggle">
                                <img cover class="align-end text-white" height="300" src="../../assets/images/image14.jpg" />
                                <div class="d-flex fill-height align-center justify-center">
                                    
                                    <v-scale-transition>
                                        <v-icon v-if="isSelected" color="white" size="48"
                                            icon="mdi-close-circle-outline"></v-icon>
                                    </v-scale-transition>
                                </div>
                            </v-card>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data: () => ({
            model: null,
        }),
    }
</script>

<script setup>

</script>
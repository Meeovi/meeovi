<template>
    <div>
        <v-row>
            <v-col cols="8">
                <a href="/app/">
                    <v-toolbar title="Top free apps" color="transparent"></v-toolbar>
                </a>

                <v-card color="#1F7087" theme="dark" href="">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="text-h5">
                                Supermodel
                            </v-card-title>

                            <v-card-subtitle>Foster the People</v-card-subtitle>
                        </div>

                        <v-avatar class="ma-3" size="125" rounded="0">
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>

            <v-col cols="4">
                <v-toolbar title="App of the day" color="transparent"></v-toolbar>

                <v-card color="#385F73" theme="dark" href="">
                    <v-card-title class="text-h5">
                        Unlimited music now
                    </v-card-title>

                    <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
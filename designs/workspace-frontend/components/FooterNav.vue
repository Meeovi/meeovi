<template>
    <v-footer border>
        <v-row justify="center" no-gutters>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/">
                Home
            </v-btn>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/website/about">
                About Meeovi Workspace
            </v-btn>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/website/features">
                Features
            </v-btn>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/legal/terms">
                Terms and Conditions
            </v-btn>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/legal/policies">
                Privacy Policies
            </v-btn>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/app/">
                Access Workspaces
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong><a href="https://www.meeovi.com/about">The Meeovi Company</a></strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
    export default {}
</script>
<template>
    <v-footer border>
        <v-row justify="center" no-gutters>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/">
                Home
            </v-btn>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/about">
                About Us
            </v-btn>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/journal">
                Journals
            </v-btn>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/guide">
                Tips and Guides
            </v-btn>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/blog">
                Blog
            </v-btn>
            <v-btn variant="text" class="mx-2" rounded="xl" href="/">
                Contact Us
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong><a href="https://www.alternatecms.com">AlternateFramework</a></strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
    export default {}
</script>
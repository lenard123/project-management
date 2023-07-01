<script setup>
import { reactive, ref } from "vue";

const drawer = ref(false)

const links = reactive([
    { icon: 'mdi-home', title: 'Dashboard', route: '/' },
    { icon: 'mdi-folder', title: 'My Projects', route: '/projects' },
    { icon: 'mdi-account-group', title: 'Team', route: '/team' },
])
</script>

<template>
    <nav>
        <v-toolbar flat app>
            <v-app-bar-nav-icon @click="drawer = !drawer" />
            <v-toolbar-title class="text-uppercase text-grey">
                <span class="font-weight-light">Todo</span>
                <span class="font-weight-bold">Ninja</span>
            </v-toolbar-title>
            <v-btn flat color="grey">
                <span>Sign out</span>
                <v-icon icon="mdi-exit-to-app" end />
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer temporary app class="bg-indigo" v-model="drawer">
            <v-row justify="center" class="mt-5">
                <v-avatar size="100">
                    <img src="/avatar-1.png" />
                </v-avatar>
            </v-row>
            <v-list>
                <v-list-item v-for="link in links" :prepend-icon="`${link.icon}`" :key="link.route" route :to="link.route">
                    {{ link.title }}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>
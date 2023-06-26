<script setup>
import { reactive } from 'vue';

const team = reactive([
    { name: 'The Net Ninja', role: 'Web developer', avatar: 'avatar-1.png' },
    { name: 'Ryu', role: 'Graphic designer', avatar: 'avatar-2.png' },
    { name: 'Chun Li', role: 'Web developer', avatar: 'avatar-3.png' },
    { name: 'Gouken', role: 'Social media maverick', avatar: 'avatar-4.png' },
    { name: 'Yoshi', role: 'Sales guru', avatar: 'avatar-5.png' }
])
</script>

<template>
    <div class="team">
        <h1 class="text-subtitle-1 text-grey">Team Page</h1>

        <v-container class="my-5">
            <v-row wrap>
                <v-col cols="12" sm="12" md="4" lg="3" v-for="member in team" :key="member.name">
                    <v-card flat class="text-center">
                        <v-responsive class="pt-4">
                            <v-avatar size="100" class="bg-grey">
                                <img :src="member.avatar" />
                            </v-avatar>
                        </v-responsive>    
                        <v-card-text>
                            <div class="text-subtitle-1">{{ member.name }}</div>
                            <div class="text-grey">{{ member.role }}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn flat color="grey" size="small">
                                <v-icon icon="mdi-message" start/>
                                Message
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

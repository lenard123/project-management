<script setup>
import { reactive } from 'vue';

const sortBy = (prop) => {
    projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
}

const projects = reactive([
    { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
])

</script>
<template>
    <div class="dashboard">
        <h1 class="text-subtitle-1 text-grey">Dashboard</h1>

        <v-container class="my-5">

            <v-row class="mb-3 px-3">
                <v-btn v-bind="props" @click="sortBy('title')" size="small" variant="plain" color="grey" slot="activator">
                    <v-icon icon="mdi-folder" size="small" start />
                    <span class="text-lowercase">By project name</span>
                    <v-tooltip location="bottom" activator="parent">Sort project by project name</v-tooltip>
                </v-btn>

                <v-btn @click="sortBy('person')" size="small" variant="plain" color="grey">
                    <v-icon icon="mdi-account" size="small" start />
                    <span class="text-lowercase caption">By person</span>
                    <v-tooltip location="bottom" activator="parent">Sort project by person name</v-tooltip>
                </v-btn>
            </v-row>

            <v-card flat class="px-3" v-for="project in projects" :key="project.title">
                <v-row wrap :class="`pa-3 project ${project.status}`">
                    <v-col cols="12" md="6">
                        <div class="caption text-grey">Project Title</div>
                        <div>{{ project.title }}</div>
                    </v-col>
                    <v-col cols="6" sm="4" md="2">
                        <div class="caption text-grey">Person</div>
                        <div>{{ project.person }}</div>
                    </v-col>
                    <v-col cols="6" sm="4" md="2">
                        <div class="caption text-grey">Due by</div>
                        <div>{{ project.due }}</div>
                    </v-col>
                    <v-col cols="12" sm="4" md="2">
                        <div class="text-right">
                            <v-chip size="small" class="text-white project-status my-2">{{ project.status }}</v-chip>
                        </div>
                    </v-col>
                </v-row>
                <v-divider />
            </v-card>
        </v-container>

    </div>
</template>
<style>
.project {
    border-left: 4px solid var(--status-color);
}

.project .project-status {
    background-color: var(--status-color);
}

.project.complete {
    --status-color: #3CD1C2;
}

.project.ongoing {
    --status-color: orange;
}

.project.overdue {
    --status-color: tomato;
}
</style>
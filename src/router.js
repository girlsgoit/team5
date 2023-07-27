import { createRouter, createWebHistory } from 'vue-router';

import header from "./components/header.vue"
import footer from "./components/footer.vue"
import informationComp from "./components/informationComp.vue"
import welcomeComp from "./components/welcomeComp.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "informationComp",
            path: "/informationComp",
            component: informationComp
        },
        {
            name: "welcomeComp",
            path: "/welcomeComp",
            component: welcomeComp
        },

    ],
});
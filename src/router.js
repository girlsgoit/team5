import { createRouter, createWebHistory } from 'vue-router';

import header from "./components/header.vue"
import footer from "./components/footer.vue"
import informationComp from "./components/informationComp.vue"
import welcomeComp from "./components/welcomeComp.vue"
import cultura from "./components/cultura.vue"
import mainView from "./views/mainView.vue"
import domainView from "./views/domainView.vue"
import galleryComp from "./components/galleryComp.vue"

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
        {
            name: 'home',
            path: '/',
            component: mainView,
            children: [
                {
                    name: 'gallery',
                    path: "/gallery",
                    component: galleryComp
            }
            ]

        },
        {
            name: 'domain',
            path: '/domain',
            component: mainView,
            children: [
            {
                name: 'cultura',
                path: "/cultura",
                component: cultura
            },
            {
                name: 'economie',
                path: "/economie",
                component: economie
            },
            {
                name: 'educatie',
                path: "/educatie",
                component: educatie
            },
            {
                name: 'IT',
                path: "/it",
                component: it
            }, 
            {
                name: 'politica',
                path: "/politica",
                component: politica
            }, 
            {
                name: 'sport',
                path: "/sport",
                component: sport
            }, 
            ]

        }

    ],
});
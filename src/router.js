import { createRouter, createWebHistory } from 'vue-router';

import header from "./components/header.vue"
import footer from "./components/footer.vue"
import informationComp from "./components/informationComp.vue"
import welcomeComp from "./components/welcomeComp.vue"
import cultura from "./components/cultura.vue"
import mainView from "./views/mainView.vue"
import domainView from "./views/domainView.vue"
import galleryComp from "./components/galleryComp.vue"
import it from "./components/it.vue"
import sport from "./components/sport.vue"
import economie from "./components/economie.vue"


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
        },
        {
            name: 'domain',
            path: '/domain',
            component: domainView,
            children:[
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
                    name: 'IT',
                    path: "/it",
                    component: it
                }, 
                {
                    name: 'sport',
                    path: "/sport",
                    component: sport
                }, 
            ]
        },
        

    ],
});
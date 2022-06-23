import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: () => import('../views/MainPage.vue'),
    },
    {
        path: '/alltag',
        name: 'AllTag',
        component: () => import('../views/AllTag.vue'),
    },
    {
        path: '/allcard',
        name: 'AllCard',
        component: () => import('../views/AllCard.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

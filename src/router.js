import HomeIndex from './components/Home/HomeIndex.vue';
import BlogIndex from './components/Blog/BlogIndex.vue';
import LinkIndex from './components/Link/LinkIndex.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeIndex },
        { path: '/blog', component: BlogIndex },
        { path: '/link', component: LinkIndex }
    ]
});

export default router;

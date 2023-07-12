import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/', name: "Home", component: () => import("../pages/Products.vue")},
    {path: '/products/:category', name: "ViewProduct", component: () => import("../pages/Product.vue")},
    {path: '/orders', name: "Orders", component: () => import("../pages/Orders.vue")},
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes,
})

export default router;



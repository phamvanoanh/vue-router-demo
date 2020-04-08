import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DynamicRouteMatching from "../components/DynamicRouteMatching";
import NestRoutes from "../components/NestRoutes";
import SubRouteProfile from "../components/SubRouteProfile";
import SubRoutePost from "../components/SubRoutePost";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        // dynamic segments start with a colon
        path: "/dynamic/:id", component: DynamicRouteMatching
    },
    {
        // will match everything
        path: '*'
    },
    {
        // start with '/user-'
        path: '/user',
        component: NestRoutes,
        children: [
            {path: 'profile', component: SubRouteProfile},
            {path: 'post', component: SubRoutePost},
        ]
    }
];

const router = new VueRouter({
    routes
});

export default router;

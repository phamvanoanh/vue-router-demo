import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DynamicRouteMatching from "../components/DynamicRouteMatching";
import NestRoutes from "../components/NestRoutes";
import SubRouteProfile from "../components/SubRouteProfile";
import SubRoutePost from "../components/SubRoutePost";
import ProgrammaticNavigation from "../components/ProgrammaticNavigation";
import SubNamedView1 from "../components/namedView/SubNamedView1";
import SubNamedView2 from "../components/namedView/SubNamedView2";
import NamedView from "../components/namedView/NamedView";

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
    },
    {
        // start with '/user-'
        path: '/register',
        component: ProgrammaticNavigation
    },
    {
        // start with '/user-'
        path: '/namedView',
        component: NamedView
    },
    {
        path: '/sub',
        components: {
            default: SubNamedView1,
            sub2: SubNamedView2
        }
    }
];

const router = new VueRouter({
    routes
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

import About from "@/components/About";
import Groups from "@/components/Groups.vue";
import GroupDetaild from "@/components/GroupDetaild";
import EditForm from "@/components/FullScreenEditGroup.vue";
import NewForm from "@/components/FullScreenNewGroup.vue";
import SignIn from "@/components/FullScreenSignIn";
import auth from "@/auth";


const Router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Groups,
            meta: {
                needAuthentification: true
            }
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/group/:id",
            component: GroupDetaild,
            props: true
        },
        {
            path: "/group/:id/edit",
            component: EditForm,
            props: true,
            meta: {
                needAuthentification: true
            }
        },
        {
            path: "/group/new",
            component: NewForm,
            meta: {
                needAuthentification: true
            }
        },
        {
            path: "/signin",
            component: SignIn
        }
    ]
});

Router.beforeEach(async (to, from, next) => {
    if (to.meta && to.meta.needAuthentification) {       
        if (await auth.ckeckSignInStatus())
            next();
        else
            next("/signin");
    } else
        next();
});

export default Router;
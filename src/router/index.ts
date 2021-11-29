import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuardNext } from 'vue-router';
import store from '@/store';

const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue');
const SignIn = () => import(/* webpackChunkName: "sign-in" */ '@/views/SignIn.vue');
const SignUp = () => import(/* webpackChunkName: "sign-up" */ '@/views/SignUp.vue');
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue');
const Four0Four = () => import(/* webpackChunkName: "404" */ '@/views/404.vue');

const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'signIn',
    path: '/sign-in',
    component: SignIn
  },
  {
    name: 'signUp',
    path: '/sign-up',
    component: SignUp
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next:NavigationGuardNext) => {
      console.log(store.state.isAuth);
      if (store.state.isAuth) {
        next();
      } else {
        next({ name: 'signIn' });
      }
    }
  },
  {
    name: 'Four0Four',
    path: '/:catchAll(.*)*',
    component: Four0Four
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    next();
    return;
  }

  if (store.state.isAuth) {
    next();
  } else {
    next({ name: 'signIn' });
  }
});

export default router;
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
const TheContainer = () => import("@/containers/TheContainer");

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: "หน้าแรก",
    component: TheContainer,
    meta: { requiresAuth: false, lv: 1, activeUrl: "/home" },
    children: [
      {
        path: "home",
        redirect: "/home",
        name: "",
        component: {
          render(c) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "",
            name: "หน้าหลัก",
            component: Home,
            meta: {
              requiresAuth: true,
              isChildren: true,
              activeUrl: "/home",
              lv: 2,
            },
          },
        ],
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

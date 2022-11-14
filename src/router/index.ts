import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import login from "@/view/login/login.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

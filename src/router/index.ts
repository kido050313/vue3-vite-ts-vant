import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

type metaType = {
  title: string,
  keepAlive: boolean,
}

function genRouter(path: string, name: string, meta: metaType, pathName: string) {
  return {
    path,
    name,
    meta,
    component: () => import(`../views/${pathName}.vue`),
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    meta: {
      title: "发现",
      keepAlive: true
    },
    component: () => import("../views/Index/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: true
    },
    component: () => import("../views/Login/index.vue"),
  },
  // genRouter("/book-self", "/index", {title: '发现', keepAlive: true}, "Index/index"),
  genRouter("/book-self", "Bookself", {title: '书架', keepAlive: true}, "Bookself/index"),
  genRouter("/look", "Look", {title: '看一看', keepAlive: true}, "Look/index"),
  genRouter("/mine", "Mine", {title: '我的', keepAlive: true}, "Mine/index"),
  // {
  //   path: "/book-self",
  //   name: "Bookself",
  //   meta: {
  //     title: "书架",
  //     keepAlive: true
  //   },
  //   component: () => import("../views/Bookself/index.vue"),
  // },
  // {
  //   path: "/look",
  //   name: "Look",
  //   meta: {
  //     title: "看一看",
  //     keepAlive: true
  //   },
  //   component: () => import("../views/Look/index.vue"),
  // },
  // {
  //   path: "/mine",
  //   name: "Mine",
  //   meta: {
  //     title: "登录",
  //     keepAlive: true
  //   },
  //   component: () => import("../views/Mine/index.vue"),
  // },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
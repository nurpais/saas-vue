import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Anime from "../anime";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/blog",
    name: "blog",
    meta: {
      nav: true
    },
    component: () => import(/* webpackChunkName: "blog" */ "../views/Blog.vue")
  },
  {
    path: "/blog/:id",
    name: "single",
    meta: {
      nav: true
    },
    component: () =>
      import(/* webpackChunkName: "single" */ "../views/SingleBlog.vue")
  }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (from.name == null) {
    next()
  } else if (!to.hash) {
    let anime = new Anime()
    anime.run().then(() => {
      next();
    });
  } else {
    next()
  }
});

export default router;

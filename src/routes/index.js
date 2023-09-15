import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: getRoutes(),
});

function getRoutes() {
  return [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/components/HomePage.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/components/AboutPage.vue"),
    },
    {
      path: "/service/:page",
      name: "service",
      component: () => import("/src/homenew/Components/ServiceTab.vue"),
    },
    {
      path: "/work",
      name: "work",
      component: () => import("@/components/WorkPage.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/components/ContactPage.vue"),
    },
    {
      path: "/special-offers",
      name: "special-offers",
      component: () => import("@/components/SpecialOffers.vue"),
    },
    {
      path: "/intern/:internId",
      name: "intern",
      component: () => import("@/components/InternDetail.vue"),
    },
    {
      path: "/internship",
      name: "internship",
      component: () => import("@/components/InternShip.vue"),
    },
  ];
}

export default router;

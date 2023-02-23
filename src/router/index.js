import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/politika-zasebnosti",
      name: "politika-zasebnosti",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PrivacyPolicy.vue"),
    },
    {
      path: "/nakup",
      name: "nakup",
      component: () => import("../views/BuyView.vue"),
    },
    {
      path: "/recepti",
      name: "recepti",
      component: () => import("../views/RecipeView.vue"),
    },
    {
      path: "/en",
      name: "en",
      component: () => import("../views/English/HomeENView.vue"),
    },
    {
      path: "/en/recipes",
      name: "recipes",
      component: () => import("../views/English/RecipesENView.vue"),
    },
    {
      path: "/en/buy",
      name: "buy",
      component: () => import("../views/English/BuyENView.vue"),
    },
    {
      path: "/en/privacy-policy",
      name: "privacy-policy",
      component: () => import("../views/English/PrivacyPolicyEN.vue"),
    },
  ],
  linkActiveClass: "active-link",
});

export default router;

import HomePage from "@/pages/HomePage.vue";
import MoviePage from "@/pages/MoviePage.vue";
import ResultsPage from "@/pages/ResultsPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/results",
      name: "results",
      component: ResultsPage,
    },
    {
      path: "/history",
      name: "history",
      component: ResultsPage,
    },
    {
      path: "/results/:movieId",
      name: "moviePage",
      component: MoviePage,
    },
  ],
});

export default router;

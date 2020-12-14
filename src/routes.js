import Obras from "./views/Obras.vue";
import AboutMe from "./views/AboutMe.vue";

export const routes = [
  { path: "/", component: Obras, name: "Portfólio" },
  { path: "/sobremim", component: AboutMe, name: "AboutMe" },
  { path: "*", component: Obras, name: "Portfólio" },
];

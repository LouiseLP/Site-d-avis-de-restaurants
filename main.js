import Vue from "vue";
import App from "./App.vue";
import PageContact from "./components/PageContact.vue";
import PageAbout from "./components/PageAbout.vue";
import PageSearch from "./components/PageSearch";
import Vuex from "vuex";
import store from "./components/StoreApp";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

library.add(faUserSecret);
library.add(faFontAwesome);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: PageAbout,
      name: "root"
    },
    {
      path: "/Accueil",
      component: PageAbout,
      name: "home"
    },
    {
      path: "/restaurants",
      component: PageSearch,
      name: "onSearch"
    },
    {
      path: "/NousContacter",
      component: PageContact,
      name: "contact"
    },

    {
      path: "*",
      redirect: "/"
    }
  ]
});

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  router,
  store: new Vuex.Store(store),
  render: h => h(App)
}).$mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createHead, VueHeadMixin } from "@vueuse/head";

const app = createApp(App);
const head = createHead();

app.use(store);
app.use(router);
app.mixin(VueHeadMixin);
app.use(head);
app.mount("#app");

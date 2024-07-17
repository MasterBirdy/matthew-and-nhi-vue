import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiXCircleFill,
  MdKeyboardarrowleftRound,
  MdKeyboardarrowrightRound,
  BiArrowLeftCircleFill,
  BiArrowRightCircleFill,
} from "oh-vue-icons/icons";

addIcons(
  BiXCircleFill,
  MdKeyboardarrowrightRound,
  MdKeyboardarrowleftRound,
  BiArrowLeftCircleFill,
  BiArrowRightCircleFill
);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.use(router);

app.mount("#app");

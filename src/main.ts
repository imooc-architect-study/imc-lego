import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import LegoComponents from "imc-components";
import "imc-components/dist/style.css";

import TemplateList from "@/components/template-list/index.vue";

const app = createApp(App);
app.use(store).use(router).use(Antd).use(LegoComponents);

const myComponents = [TemplateList];

myComponents.forEach((compoment) => app.component(compoment.name, compoment));

app.mount("#app");

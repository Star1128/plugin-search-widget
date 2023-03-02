import SearchWidget from "@/components/SearchWidget.vue";
import "@/styles/style.css";
import "@/styles/tailwind.css";
import type { App, Plugin } from "vue";

const plugin: Plugin = {
  install(app: App) {
    app.component("SearchWidget", SearchWidget);
  },
};

export default plugin;

export { SearchWidget };

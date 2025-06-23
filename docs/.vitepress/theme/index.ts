import Theme from "vitepress/dist/client/theme-default";
import DeadmanUI from "../../../src/entry";
// 插件的组件，主要是demo组件
import Demo from "vitepress-theme-demoblock/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(DeadmanUI);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
  },
};

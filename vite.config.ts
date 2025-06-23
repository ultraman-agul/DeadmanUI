import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
    assetFileNames: `assets/[name].css`,
  },
};

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // 添加UnoCSS插件
    Unocss(),
  ],
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "DeadmanUI",
      fileName: "deadman-ui",
      // 导出模块格式
      // @ts-ignore
      formats: ["esm", "umd", "iife"],
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true, // simulate DOM with happy-dom // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom", // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});

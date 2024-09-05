// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
// 导入默认主题，使得自定义主题可以继承默认主题的样式和行为
import DefaultTheme from 'vitepress/theme';
// 引入自定义的 CSS 样式文件，用于覆盖或扩展默认主题的颜色、字体等样式
import './style.css';
// VitePress 已预先配置 @vitejs/plugin-vue
import Layout from './Layout.vue';

// 定义一个对象作为自定义主题。通过扩展默认主题，自定义主题可以继承所有默认主题的属性和方法。
export default {
  extends: DefaultTheme,
  // Layout: 一个函数，返回一个生成的 h 函数调用，用于创建自定义布局组件
  // Layout: () => {
  //   // 使用 h 函数创建一个新的组件，该组件继承自默认主题的布局组件
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  Layout,
  // enhanceApp 函数用于增强 Vue 应用实例，可以添加自定义插件或逻辑
  enhanceApp({ app, router, siteData }) {
    // 自定义增强逻辑，例如注册插件或添加全局组件
  }
};


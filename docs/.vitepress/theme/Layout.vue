<template>
  <div v-if="frontmatter.home">
    <h1>{{ site.title }}</h1>
    <p>{{ site.description }}</p>
    <ul>
      <li><a href="/markdown-examples.html">Markdown Examples</a></li>
      <li><a href="/api-examples.html">API Examples</a></li>
    </ul>
  </div>
  <div v-else>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/articles/my-article">My Article</a>
    <Content />
  </div>
</template>

<script setup>
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter,...props_useData } = useData()

console.log('site:',site);
console.log('props_useData:',props_useData);
// console.log('props_vitepress:',props_vitepress);
console.log('frontmatter:',frontmatter);
</script>

<style scoped>

</style>

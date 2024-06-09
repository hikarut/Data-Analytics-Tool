<template>
  <aside class="menu">
    <p class="header"><nuxt-link to="/">Data Analytics Tool</nuxt-link></p>
    <ul class="menu-list">
      <li><nuxt-link to="/">Top</nuxt-link></li>
      <li><nuxt-link to="/sql_everyone">SQL</nuxt-link></li>
      <li><nuxt-link to="/abtest">AB Test</nuxt-link></li>
    </ul>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.header {
  color: $white;
  margin: 20px;
}
.menu {
  position: fixed;
}
.menu-list {
  margin: 10px;
}
.header a,
.menu-list li a {
  color: $white;
  background-color: $dark;
}
.menu-list a:hover {
  // background-color: $dark;
  color: $orange;
}
.header a:hover {
  background-color: $dark;
}
</style>

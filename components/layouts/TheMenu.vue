<template>
  <aside class="menu">
    <p class="header">Data Analytics Tool</p>
    <ul class="menu-list">
      <li><nuxt-link to="/">Top</nuxt-link></li>
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
.menu-list li a {
  color: $white;
}
.menu-list a:hover {
  background-color: $dark;
  color: $orange;
}
</style>

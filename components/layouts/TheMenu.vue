<template>
  <aside class="menu">
    <p class="menu-label">Tool</p>
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
.menu-label {
  margin: 10px 10px;
}
</style>

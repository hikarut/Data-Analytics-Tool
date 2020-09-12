<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/"> Data Analytics Tool </nuxt-link>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $dark;
}
.navbar-item {
  color: $whitesmoke;
}
a.navbar-item:hover {
  color: $whitesmoke;
}
</style>

<template>
  <div>
    <the-header />
    <div class="columns">
      <div class="column side-menu">
        <the-menu />
      </div>
      <div class="column is-four-fifths main-column">
        <nuxt />
      </div>
    </div>
    <the-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeader from '~/components/layouts/TheHeader.vue'
import TheFooter from '~/components/layouts/TheFooter.vue'
import TheMenu from '~/components/layouts/TheMenu.vue'

export default Vue.extend({
  components: {
    TheHeader,
    TheFooter,
    TheMenu,
  },
})
</script>

<style lang="scss" scoped>
.side-menu {
  background-color: $whitesmoke;
}
.columns:not(:last-child) {
  margin-bottom: 0;
}
.main-column {
  min-height: 480px;
}
</style>

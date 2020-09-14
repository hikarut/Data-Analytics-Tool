<template>
  <div>
    <div class="columns">
      <div class="column side-menu">
        <the-menu />
      </div>
      <div class="column is-four-fifths main-column">
        <nuxt />
        <the-footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheFooter from '~/components/layouts/TheFooter.vue'
import TheMenu from '~/components/layouts/TheMenu.vue'

export default Vue.extend({
  components: {
    TheFooter,
    TheMenu,
  },
})
</script>

<style lang="scss" scoped>
.side-menu {
  background-color: $dark;
}
.columns:not(:last-child) {
  margin-bottom: 0;
}
.main-column {
  min-height: 720px;
}
</style>

<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <p class="has-text-centered">Error</p>
        <p class="has-text-centered error-message">
          <nuxt-link to="/">Top</nuxt-link>に戻る
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.error-message {
  margin-top: 10px;
}
</style>

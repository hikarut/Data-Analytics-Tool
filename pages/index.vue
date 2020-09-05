<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Hero title</h1>
        <h2 class="subtitle">Hero subtitle</h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  beforeMount() {
    console.log(111)
  },
})
</script>

<style lang="scss" scoped>
.title {
  color: $main;
}
</style>

<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="has-text-centered">
          <img src="ogimage.png" width="400px" />
        </div>
        <p class="has-text-centered">ノーコードで使えるデータ分析ツール</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  beforeMount() {
    console.log(111)
    console.log(window.parent.screen.height)
  },
})
</script>

<style lang="scss" scoped>
.title {
  color: $blue;
}
</style>

<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">AB Test Tool</h1>
        <h2 class="subtitle">ABテストの有意差判定ツール</h2>

        <div class="columns">
          <div class="column">
            <article class="panel">
              <p class="panel-heading">Aパターン</p>
              <div class="container is-fluid">
                <div class="notification">
                  <p class="control has-icons-left">
                    <input
                      class="input is-large"
                      type="text"
                      placeholder="Visitors"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </p>
                  <p class="control has-icons-left">
                    <input
                      class="input is-large"
                      type="text"
                      placeholder="Conversions"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-heart"></i>
                    </span>
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div class="column">
            <article class="panel">
              <p class="panel-heading">Bパターン</p>
              <div class="container is-fluid">
                <div class="notification">
                  <p class="control has-icons-left">
                    <input
                      class="input is-large"
                      type="text"
                      placeholder="Visitors"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </p>
                  <p class="control has-icons-left">
                    <input
                      class="input is-large"
                      type="text"
                      placeholder="Conversions"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-heart"></i>
                    </span>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
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
  color: $dark;
}
.panel-heading {
  background-color: $orange;
  color: $white;
}
.notification {
  background-color: $white;
}
.control {
  margin: 10px;
}
</style>

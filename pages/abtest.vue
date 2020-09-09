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
                  <input-number
                    icon="fas fa-user"
                    placeholder="Visitors"
                    @parentMethod="setAVisitors"
                  />
                  <input-number
                    icon="fas fa-heart"
                    placeholder="Conversions"
                    @parentMethod="setAConversions"
                  />
                </div>
              </div>
            </article>
          </div>

          <div class="column">
            <article class="panel">
              <p class="panel-heading">Bパターン</p>
              <div class="container is-fluid">
                <div class="notification">
                  <input-number
                    icon="fas fa-user"
                    placeholder="Visitors"
                    @parentMethod="setBVisitors"
                  />
                  <input-number
                    icon="fas fa-heart"
                    placeholder="Conversions"
                    @parentMethod="setBConversions"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
        <button class="button is-large" @click="check()">Large</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import InputNumber from '~/components/pages/abtest/InputNumber'

export default Vue.extend({
  components: {
    InputNumber,
  },
  data: () => ({
    aVisitors: 0,
    bVisitors: 0,
    aConversions: 0,
    bConversions: 0,
  }),
  methods: {
    check() {
      console.log('this.aVisitors')
      console.log(this.aVisitors)
      console.log('this.aConversions')
      console.log(this.aConversions)
      console.log('this.bVisitors')
      console.log(this.bVisitors)
      console.log('this.bConversions')
      console.log(this.bConversions)
    },
    setAVisitors(value, key) {
      console.log(value)
      console.log(key)
      this.aVisitors = value
    },
    setAConversions(value) {
      this.aConversions = value
    },
    setBVisitors(value) {
      this.bVisitors = value
    },
    setBConversions(value) {
      this.bConversions = value
    },
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

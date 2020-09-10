<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-two-thirds">
            <h1 class="title">AB Test Tool</h1>
            <h2 class="subtitle">ABテストの有意差判定ツール</h2>
          </div>
          <div class="column">
            <div class="check-button">
              <button class="button is-large is-fullwidth" @click="check()">
                Check
              </button>
            </div>
          </div>
        </div>

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
                  <div class="cvr" :class="aWinLose">{{ aCvr }} %</div>
                  <div class="win-lose" :class="aWinLose">{{ aWinLose }}</div>
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
                  <div class="cvr" :class="bWinLose">{{ bCvr }} %</div>
                  <div class="win-lose" :class="bWinLose">{{ bWinLose }}</div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="statistics">
          <span class="statistics-value">p-value: {{ pValue }}</span>
          <span class="statistics-value">z-score: {{ zValue }}</span>
          <span class="statistics-value">uplift: {{ uplift }}%</span>
        </div>
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
    aCvr: 0,
    bCvr: 0,
    aWinLose: '-',
    bWinLose: '-',
    pValue: 0,
    zValue: 0,
    uplift: 0,
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
      this.aCvr =
        Math.round((this.aConversions / this.aVisitors) * 100 * 100) / 100
      this.bCvr =
        Math.round((this.bConversions / this.bVisitors) * 100 * 100) / 100
      this.aWinLose = 'Win'
      this.bWinLose = 'Lose'
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
  color: $blue;
}
.panel-heading {
  // background-color: $orange;
  background-color: $dark;
  color: $white;
}
.notification {
  background-color: $white;
}
.control {
  margin: 10px;
}
.check-button {
  // width: 50%;
  // margin: 0 auto;
}
.cvr,
.win-lose {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin: 20px;
}
.Win {
  color: $orange;
}
.Lose {
  // color: $gray;
}
.statistics {
  text-align: center;
}
.statistics-value {
  font-size: 20px;
  margin-right: 40px;
  font-weight: bold;
}
</style>

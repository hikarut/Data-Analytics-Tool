<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-two-thirds">
            <h1 class="title">AB Test Tool</h1>
            <h2 class="subtitle">ABテストの有意差判定ツール</h2>
          </div>
          <div class="column"></div>
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
                    value="80000"
                    @parentMethod="setAVisitors"
                  />
                  <input-number
                    icon="fas fa-heart"
                    placeholder="Conversions"
                    value="1600"
                    @parentMethod="setAConversions"
                  />
                  <p class="center">Conversion rate</p>
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
                    value="80000"
                    @parentMethod="setBVisitors"
                  />
                  <input-number
                    icon="fas fa-heart"
                    placeholder="Conversions"
                    value="1696"
                    @parentMethod="setBConversions"
                  />
                  <p class="center">Conversion rate</p>
                  <div class="cvr" :class="bWinLose">{{ bCvr }} %</div>
                  <div class="win-lose" :class="bWinLose">{{ bWinLose }}</div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="has-text-centered">
          <span class="statistics-value">p-value: {{ pValue }}</span>
          <span class="statistics-value">z-score: {{ zValue }}</span>
          <span class="statistics-value">uplift: {{ uplift }}%</span>
        </div>
      </div>
      <div class="check-button">
        <button
          class="button is-large is-fullwidth is-primary"
          @click="check()"
        >
          Check
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
// import { jStat } from 'jstat'
const { jStat } = require('jstat')
import InputNumber from '~/components/pages/abtest/InputNumber.vue'

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
      const aCvr = this.aConversions / this.aVisitors
      const bCvr = this.bConversions / this.bVisitors
      this.aCvr = Math.round(aCvr * 100 * 100) / 100
      this.bCvr = Math.round(bCvr * 100 * 100) / 100

      const pool =
        (this.aVisitors * aCvr + this.bVisitors * bCvr) /
        (this.aVisitors + this.bVisitors)

      const zValue =
        (aCvr - bCvr) /
        Math.sqrt(pool * (1 - pool) * (1 / this.aVisitors + 1 / this.bVisitors))
      this.zValue = Math.round(zValue * 1000) / 1000

      // z値、平均、標準偏差
      let pValue = jStat.normal.cdf(zValue, 0, 1)
      pValue = pValue > 0.5 ? 1 - pValue : pValue
      this.pValue = Math.round(pValue * 1000) / 1000

      this.aWinLose =
        this.aCvr > this.bCvr && this.pValue < 0.05 ? 'Win' : 'Lose'
      this.bWinLose =
        this.aCvr > this.bCvr && this.pValue < 0.05 ? 'Lose' : 'Win'

      if (this.aCvr > this.bCvr && this.pValue < 0.05) {
        this.aWinLose = 'Win'
        this.bWinLose = 'Lose'
        this.uplift = Math.round((aCvr / bCvr) * 100 * 100) / 100
      } else if (this.bCvr > this.aCvr && this.pValue < 0.05) {
        this.aWinLose = 'Lose'
        this.bWinLose = 'Win'
        this.uplift = Math.round((bCvr / aCvr) * 100 * 100) / 100
      } else {
        this.aWinLose = 'Draw'
        this.bWinLose = 'Draw'
      }
    },
    setAVisitors(value: number) {
      console.log(value)
      this.aVisitors = value
    },
    setAConversions(value: number) {
      this.aConversions = value
    },
    setBVisitors(value: number) {
      this.bVisitors = value
    },
    setBConversions(value: number) {
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
  width: 50%;
  margin: 20px auto;
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
.statistics-value {
  font-size: 20px;
  margin-right: 40px;
  font-weight: bold;
}
.center {
  text-align: center;
  margin-top: 20px;
}
</style>

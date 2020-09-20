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
          <span class="statistics-value" :class="[bWinLose, aWinLose]">
            p-value: {{ pValue }}
          </span>
          <span class="statistics-value" :class="[bWinLose, aWinLose]">
            z-score: {{ zValue }}
          </span>
          <span class="statistics-value" :class="[bWinLose, aWinLose]">
            uplift: {{ uplift }}%
          </span>
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
const { jStat } = require('jstat')
import InputNumber from '~/components/pages/abtest/InputNumber.vue'
import {
  getCvr,
  percentRound,
  valueRound,
  getPoolValue,
  getZValue,
  getPValue,
} from '~/lib/statistics.ts'

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
      const aCvr = getCvr(this.aConversions, this.aVisitors)
      const bCvr = getCvr(this.bConversions, this.bVisitors)
      this.aCvr = percentRound(aCvr, 100)
      this.bCvr = percentRound(bCvr, 100)

      const pool = getPoolValue(this.aVisitors, aCvr, this.bVisitors, bCvr)
      const zValue = getZValue(this.aVisitors, aCvr, this.bVisitors, bCvr, pool)
      this.zValue = valueRound(zValue, 1000)

      let pValue = getPValue(zValue)
      pValue = pValue > 0.5 ? 1 - pValue : pValue
      this.pValue = valueRound(pValue, 1000)

      this.aWinLose =
        this.aCvr > this.bCvr && this.pValue < 0.05 ? 'Win' : 'Lose'
      this.bWinLose =
        this.aCvr > this.bCvr && this.pValue < 0.05 ? 'Lose' : 'Win'

      if (this.aCvr > this.bCvr && this.pValue < 0.05) {
        this.aWinLose = 'Win'
        this.bWinLose = 'Lose'
        this.uplift = percentRound(aCvr / bCvr, 100)
      } else if (this.bCvr > this.aCvr && this.pValue < 0.05) {
        this.aWinLose = 'Lose'
        this.bWinLose = 'Win'
        this.uplift = percentRound(bCvr / aCvr, 100)
      } else {
        this.aWinLose = 'Draw'
        this.bWinLose = 'Draw'
      }
    },
    setAVisitors(value: number) {
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

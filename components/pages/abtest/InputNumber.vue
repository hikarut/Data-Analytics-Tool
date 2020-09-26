<template>
  <p class="control has-icons-left">
    <input
      v-model="inputValue"
      class="input is-large"
      type="number"
      min="0"
      :placeholder="placeholder"
    />
    <span class="icon is-small is-left">
      <i :class="icon"></i>
    </span>
  </p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    icon: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    inputValue: {
      get(): number {
        return Number(this.value)
      },
      set(value: string) {
        this.$emit('parentMethod', Number(value))
      },
    },
  },
  beforeMount() {
    this.$emit('parentMethod', Number(this.value))
  },
})
</script>

<style lang="scss" scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}
</style>

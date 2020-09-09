<template>
  <p class="control has-icons-left">
    <input
      v-model="inputValue"
      class="input is-large"
      type="text"
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
  },
  computed: {
    inputValue: {
      get() {
        return null
      },
      set(value) {
        this.$emit('parentMethod', value)
      },
    },
  },
})
</script>

<style lang="scss" scoped></style>

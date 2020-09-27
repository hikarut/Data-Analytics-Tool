<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <p class="has-text-centered error">Page Not Found</p>
        <p class="has-text-centered error-message">
          <nuxt-link to="/">Top</nuxt-link>に戻る
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.error {
  font-size: 30px;
  font-weight: bold;
}
.error-message {
  margin-top: 10px;
}
</style>

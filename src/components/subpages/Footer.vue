<template>
  <div class="footer">
    <div class="footer_cols">
      <div class="footer_cols_col">
        <router-link to="/" class="footer_cols_col-elem">О нас</router-link>
        <router-link to="/" class="footer_cols_col-elem">Политика конфиденциальности</router-link>
        <router-link to="/" class="footer_cols_col-elem">Правовая информация</router-link>
        <router-link to="/" class="footer_cols_col-elem">Соглашение подписчика GooHope</router-link>
      </div>
      <div class="footer_cols_col">
        <router-link to="/" class="footer_cols_col-elem">Безопасность</router-link>
        <router-link to="/" class="footer_cols_col-elem">FAQ</router-link>
        <router-link to="/" class="footer_cols_col-elem">Поддержка</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  data() {
    return {
      show: true
    }
  },
}
</script>

<style lang="sass" scoped>
.footer
  width: 100%
  height: 185px
  display: flex
  justify-content: center
  border-top: 4px solid $gray

  &_cols
    display: flex
    align-items: flex-start
    width: 1250px

    &_col
      display: flex
      justify-content: center
      align-items: flex-start
      flex-direction: column

      &-elem
        +light
        text-decoration: none
        color: $white
        font-size: 18px
        padding-top: 10px

      &:nth-child(1)
        margin-right: 60px
</style>
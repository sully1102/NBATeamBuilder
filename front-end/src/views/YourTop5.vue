<template>
<div>
  <YourTop5List :yourTop5="yourTop5" />
</div>
</template>

<script>
import YourTop5List from "../components/YourTop5List.vue"
export default {
  name: 'YourTop5',
  components: {
    YourTop5List
  },
  computed: {
    yourTop5() {
      return this.$root.$data.yourTop5;
    }
  }
}
</script>

<style>
h1 {
  text-align: center;
}
</style>

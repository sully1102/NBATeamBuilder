<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form v-on:submit.prevent="searchPlayer">
        <i class="fas fa-search"></i><input v-model="playerName" />
      </form>
      <p>
        Enter a player's name to look at their stats and potentially
        add them to your Top 5!
      </p>
      <SearchPlayer :player="player" />
    </div>
  </div>
</div>
</template>

<script>
import SearchPlayer from "../components/SearchPlayer.vue"
export default {
  name: 'Home',
  data() {
    return {
      playerName: ''
    }
  },
  components: {
    SearchPlayer
  },
  computed: {
    player() {
      return this.$root.$data.emptyThing;
    }
  },
  methods: {
    searchPlayer() {
      SearchPlayer.methods.searchPlayer(this.playerName);
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 80%;
  margin: 10px auto;
  position: relative;
  justify-content: center;
  text-align: center;
}

.search {
  margin: auto;
  border-radius: 4px;
  width: 60%;
}

form {
  display: table;
  border: 1px solid #ccc;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>

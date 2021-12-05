<template>
<div class="players">
  <div class="player" v-for="player in yourTop5" :key="player.name">
    <div class="info">
      <h1>{{player.name}}</h1>
      <p>{{player.position}}</p>
    </div>
    <div class="image">
      <img v-bind:src="player.imgsrc" />
    </div>
    <button id="removeButton" v-on:click="removePlayer(player.name)">Remove Player</button>
  </div>
</div>
</template>

<script>
//import axios from 'axios';
export default {
  name: 'YourTop5List',
  props: {
    yourTop5: Array
  },
  methods: {
    removePlayer: function (playerName) {
      console.log(playerName)
      let i = 0;
      while (i < this.$root.$data.yourTop5.length) {
        if (this.$root.$data.yourTop5[i].name === playerName) {
          this.$root.$data.yourTop5.splice(i,1);
        } else {
          ++i;
        }
      }
    }
  }
}
</script>

<style scoped>
.players {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 80px;
}

.player {
  margin: 10px;
  margin-top: 50px;
  max-width: 200px;
}

.player img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.player .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px;
  height: 60px;
  text-align: center;
}

.info h1 {
  margin: 2px;
  font-size: 18px;
}

.info p {
  margin: 0px;
  font-size: 15px;
}

.auto {
  margin-left: auto;
}
</style>

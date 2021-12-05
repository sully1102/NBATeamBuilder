<template>
<div class="players">
  <div class="player" v-for="player in myTop5" :key="player.id">
    <div class="info">
      <h1>{{player.name}}</h1>
      <p>{{player.position}}</p>
    </div>
    <div class="image">
      <img :src="'/images/mytop5/'+player.image">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MyTop5List',
  props: {
    myTop5: Array
  }
}
</script>

<style scoped>
.players {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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

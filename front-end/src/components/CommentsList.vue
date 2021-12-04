<template>
<div class="comments">
  <div class="comment" v-for="comment in comments" :key="comment.name">
    <div class="info">
      <h1>{{comment.name}}</h1>
      <p>{{comment.text}}</p>
    </div>
    <div class="commentTop5">
      <div class="commentPlayer" v-for="player in comment.top5" :key="player">
        <p>{{player}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CommentsList',
  props: {
    comments: Array
  }
}
</script>

<style>
.comments {
  margin-top: 50px;
  margin-bottom: 100px;
  display: grid;
  column-gap: 4rem;
  row-gap: 2rem;
}

.comment {
  border: 3px solid black;
  padding: 10px;
}

.info {
  text-align: center;
  justify-content: center;
}

.commentTop5 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.commentPlayer {
  text-align: center;
  background: #F2921D;
  border: 1px solid black;
  width: 100px;
}

@media (max-width:1000px){
    .comments {
        grid-template-columns: 1fr;
    }

}
@media (min-width:1000px){
  .comments {
      grid-template-columns: 1fr 1fr;
  }
}
</style>

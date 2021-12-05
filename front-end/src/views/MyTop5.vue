<template>
<div>
  <MyTop5List :myTop5="myTop5" />
  <div id="container">
    <div id="justification">
      <h2>My Justification</h2>
      <p>I believe this team has the best chance to go 82-0 out of any other combination.
       You have two of the top 5 shooters of all time with Steph and Klay. You have the
       most dominant center of all time with Shaq. You have two of the clutchest players with
       Lebron and Michael. Finally, Lebron is one of the greatest slashers/passers of all time.
      </p>
    </div>
    <div id="addComment">
      <h2>Do You Agree? Leave a Comment!</h2>
      <form v-on:submit.prevent="addComment">
        <input v-model="addedName" placeholder="Name">
        <textarea v-model="addedComment"></textarea>
        <br/>
        <button type="submit">Comment</button>
      </form>
    </div>
  </div>
  <div class="comments">
    <div class="comment" v-for="comment in comments" :key="comment.name">
      <div class="info">
        <h1>{{comment.name}}</h1>
        <p>{{comment.text}}</p>
      </div>
      <div class="commentTop5">
        <div class="commentPlayer" v-for="player in comment.top5" :key="player.name">
          <p>{{player.name}}</p>
        </div>
      </div>
      <br>
      <button id="removeButton" v-on:click="removeComment(comment.name)">Remove Comment</button>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import MyTop5List from "../components/MyTop5List.vue"
export default {
  name: 'MyTop5',
  data() {
    return {
      addedName: '',
      addedComment: '',
      comments: [],
    }
  },
  created() {
    this.getComments();
  },
  components: {
    MyTop5List,
  },
  computed: {
    myTop5() {
      return this.$root.$data.myTop5;
    }
  },
  methods: {
    async getComments() {
      try {
        let response = await axios.get("/api/comments");
        this.comments = response.data;
        return true;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    async addComment() {
      try {
        await axios.post('/api/comments', {
          name: this.addedName,
          text: this.addedComment,
          top5: this.getTop5(),
        });
      } catch (error) {
        console.log(error);
      }
      // if (this.$root.$data.yourTop5.length === 5) {
      //   if (this.addedName != '' && this.addedComment != '') {
      //     this.$root.$data.comments.push({
      //       name: this.addedName,
      //       text: this.addedComment,
      //       top5: this.getTop5()
      //     });
      //     this.addedName = '';
      //     this.addedComment = '';
      //   } else {
      //     alert("You need to add your name and comment in order to leave a comment")
      //   }
      // } else {
      //   alert("You must have a Top5 before you comment")
      // }
    },
    getTop5() {
      return this.$root.$data.yourTop5;
    }
  }
}
</script>

<style>
#container {
  display: grid;
  column-gap: 4rem;
}

#justification {
  padding: 0px 25px 0px 25px;
  border: 3px solid black;
}

#addComment {
  justify-content: center;
}

input {
  width: 50%;
}

textarea {
    width: 100%;
    height: 150px;
}

h2 {
  text-align: center;
}

@media (max-width:1000px){
    #container {
        grid-template-columns: 1fr;
    }
    .comments {
        grid-template-columns: 1fr;
    }
}
@media (min-width:1000px){
  #container {
      grid-template-columns: 1fr 1fr;
  }
  .comments {
      grid-template-columns: 1fr 1fr;
  }
}

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
</style>

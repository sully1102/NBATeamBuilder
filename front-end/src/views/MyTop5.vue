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
  <CommentsList :comments="comments" />
</div>
</template>

<script>
//import axios from 'axios';
import MyTop5List from "../components/MyTop5List.vue"
import CommentsList from "../components/CommentsList.vue"
export default {
  name: 'MyTop5',
  data() {
    return {
      addedName: '',
      addedComment: '',
    }
  },
  components: {
    MyTop5List,
    CommentsList
  },
  computed: {
    myTop5() {
      return this.$root.$data.myTop5;
    },
    comments() {
      return this.$root.$data.comments;
    }
  },
  methods: {
    addComment() {
        this.$root.$data.comments.push({
          id: this.$root.$data.comments.length,
          name: this.addedName,
          text: this.addedComment,
          top5: this.getTop5()
        });
        this.addedName = '';
        this.addedComment = '';
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

}
@media (min-width:1000px){
  #container {
      grid-template-columns: 1fr 1fr;
  }
}
</style>

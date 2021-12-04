<template>
  <div id="playerDisplay" v-bind:player="player">
    <div id="playerResults"></div>
    <div id="playerInfo"></div>
    <div id="playerLogo"></div>
    <div id="playerStats"></div>
    <div id="addButton"></div>
  </div>
</template>

<script>
import YourTop5List from "../components/YourTop5List.vue"
export default {
  name: 'SearchPlayer',
  props: {
    player: Object
  },
  methods: {
    searchPlayer: function (name) {
      let scope = this

      document.getElementById("playerResults").innerHTML = "";
      document.getElementById("playerInfo").innerHTML = "";
      document.getElementById("playerLogo").innerHTML = "";
      document.getElementById("playerStats").innerHTML = "";
      document.getElementById("addButton").innerHTML = "";

      const url = `https://www.balldontlie.io/api/v1/players?per_page=100&search=${name}`;

      fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        if(json.meta.total_count == 1) {
          scope.getPlayer(json.data[0].id)
        } else if (json.meta.total_count > 1) {
          let para = document.createElement("p");
          para.innerHTML = "Looks like more than one player fits that description<br>" +
                            "Please choose one of the following:";
          document.getElementById("playerResults").appendChild(para);

          for (let i = 0; i < json.data.length; i++) {
            let btn = document.createElement("button");
            btn.innerHTML = json.data[i].first_name + " " + json.data[i].last_name;
            btn.type = "submit";
            btn.addEventListener("click", function () {
              scope.getPlayer(json.data[i].id);
            });
            document.getElementById("playerResults").appendChild(btn);
          }
        } else {
          let para = document.createElement("p");
          para.innerHTML = "Looks like no players match that name<br>Please Try Again!";
          document.getElementById("playerResults").appendChild(para);
        }
      });
    },

    getPlayer(id) {
      let scope = this

      document.getElementById("playerResults").innerHTML = "";
      const url = `https://www.balldontlie.io/api/v1/players/${id}`

      fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        scope.player = {};

        let name = document.createElement("h1");
        name.innerHTML = json.first_name + " " + json.last_name;
        document.getElementById("playerInfo").appendChild(name);
        scope.player["name"] = json.first_name + " " + json.last_name;

        let position = "";
        if (json.position == "G") {
          position = "Guard";
        } else {
          position = "Forward";
        }
        let pos = document.createElement("h3");
        pos.innerHTML = position;
        document.getElementById("playerInfo").appendChild(pos);
        scope.player["position"] = position;

        let logo = document.createElement("img");
        logo.src = "../../images/logos/" + json.team.abbreviation + ".png"
        document.getElementById("playerLogo").appendChild(logo);
        scope.player["imgsrc"] = "../../images/logos/" + json.team.abbreviation + ".png";

        scope.getStats(id);

        let btn = document.createElement("button");
        btn.innerHTML = "Add Player"
        btn.type = "submit"
        btn.addEventListener("click", function () {
          YourTop5List.methods.addPlayer(scope.player)
        });
        document.getElementById("addButton").appendChild(btn);
      });
    },

    getStats(id) {

      const url = 'https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=' + id

      fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        if (!Object.keys(json.data).length) {
          let noResults = document.createElement("h3");
          noResults.innerHTML = "Unfortunately I have only configured the api to get 2020 Stats";
          document.getElementById("playerStats").appendChild(noResults);
        } else {
          //Create the Stats Table
          let statsTitle = document.createElement("h3");
          statsTitle.innerHTML = "He played  " + json.data[0].games_played + " games during the 2020 Season";
          document.getElementById("playerStats").appendChild(statsTitle);

          let pts = document.createElement("p")
          let ast = document.createElement("p")
          let reb = document.createElement("p")
          let stl = document.createElement("p")
          let blk = document.createElement("p")
          let fgp = document.createElement("p")
          let fg3 = document.createElement("p")
          let trn = document.createElement("p")

          for (let property in json.data[0]) {
            if (property == "pts") {
              pts.innerHTML = "Points: " + json.data[0][property];
            }
            if (property == "ast") {
              ast.innerHTML = "Assists: " + json.data[0][property];
            }
            if (property == "reb") {
              reb.innerHTML = "Rebounds: " + json.data[0][property];
            }
            if (property == "stl") {
              stl.innerHTML = "Steals: " + json.data[0][property];
            }
            if (property == "blk") {
              blk.innerHTML = "Blocks: " + json.data[0][property];
            }
            if (property == "fg_pct") {
              fgp.innerHTML = "FG %: " + json.data[0][property];
            }
            if (property == "fg3_pct") {
              fg3.innerHTML = "3 Point %: " + json.data[0][property];
            }
            if (property == "turnover") {
              trn.innerHTML = "Turnovers: " + json.data[0][property];
            }
          }
          document.getElementById("playerStats").appendChild(pts);
          document.getElementById("playerStats").appendChild(ast);
          document.getElementById("playerStats").appendChild(reb);
          document.getElementById("playerStats").appendChild(stl);
          document.getElementById("playerStats").appendChild(blk);
          document.getElementById("playerStats").appendChild(fgp);
          document.getElementById("playerStats").appendChild(fg3);
          document.getElementById("playerStats").appendChild(trn);
        }
      });
    }
  }
}
</script>

<style>
#playerDisplay {
  margin: auto;
  width: 100%;
  padding: 5px;
  margin-bottom: 100px;
  border: 3px solid black;
}

#playerResults {
  text-align: center;
  margin: auto;
  width: 90%;
}

#playerInfo {
  width: 48%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

#playerLogo {
  width: 48%;
  margin-left: auto;
  margin-right: auto;
}

#playerLogo > img {
  max-width: 75%;
  max-height: auto;
  display: block;
  margin: auto;
}

#playerStats {
  text-align: center;
}

table {
  border: 3px solid purple;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: right;
}

tbody {
  text-align: right;
}

div:empty {
  display: none;
}
</style>

<template>
<div id="app">
  <div id="menu">
    <div id="left">
      <router-link to="/myTop5">
        <i class="fas fa-comment larger"></i>
        <p>Creator's Top 5</p>
      </router-link>
    </div>
    <div id="brand">
      <router-link to="/">
        <img src="/images/bg.webp">
      </router-link>
    </div>
    <div id="right">
      <router-link to="/yourTop5">
        <i class="fas fa-users larger"></i>
        <p>Your Top 5</p>
      </router-link>
    </div>
  </div>
  <router-view />
  <div id="footer">
    <h2><a href="https://github.com/sully1102/NBATeamBuilder">GitHub Link</a></h2>
  </div>
</div>
</template>

<style>
* {
  box-sizing: border-box;
}

#footer {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: black;
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: underline;
}

body {
  margin: 50px 50px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "left brand right";
}

#menu a {
  color: #B84901;
}

#left {
  grid-area: left;
  display: flex;
  justify-content: center;
  text-align: center;
}

#brand {
  grid-area: brand;
  display: flex;
}

#brand img {
  width: 100%;
}

#right {
  grid-area: right;
  display: flex;
  justify-content: center;
  text-align: center;
}

.larger {
  font-size: 50px;
}

.browse {
  margin-right: 50px;
}
</style>

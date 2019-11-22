<template>
  <div id="app">
    <div id="nav">
      <router-link to="/ex1">Exercise 1</router-link> |
      <router-link to="/ex2">Exercise 2</router-link> |
      <router-link to="/ex3">Exercise 3</router-link> |
      <router-link to="/ex4">Exercise 4</router-link> |
      <router-link to="/ex5">Exercise 5</router-link> |
      <router-link to="/ex6">Exercise 6</router-link> |
      <router-link to="/ex7">Exercise 7</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

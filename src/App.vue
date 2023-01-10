<template>
  <v-app>
    <v-layout>
      <v-app-bar color="primary" density="compact">
        <v-app-bar-title>Beautiful WEB</v-app-bar-title>
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
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

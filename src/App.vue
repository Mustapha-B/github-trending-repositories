<template>
  <v-app>
    <v-toolbar color="black" dark app>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>GitHub Trending Repos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

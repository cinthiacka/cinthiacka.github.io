<template>
  <v-app-bar
    app
    id="home-app-bar"
    color="white"
    elevation="3"
    height="95"
  >
    <v-toolbar-title class="d-flex align-center logo" to='/'>
      <v-icon color="#000" class="ma-3">
        fa-palette
      </v-icon>
      <div class="title ma-3">
        {{file.nome_artistico}}  
      </div>
      <div style="margin-left: 0.6em; margin-right: 1em;"> | </div>
      <div class="subtitle">
        {{file.area}}
      </div>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <div v-if="$vuetify.breakpoint.mdAndUp">
      <v-tabs
        optional
      >
        <v-tab
          v-for="item in items"
          :key="item.nome"  
          :to="item.link"
          active-class="text--primary"
          class="font-weight-bold subtitle"
          min-width="96"
          text
        >
          {{ item.nome }}
        </v-tab>
      </v-tabs>
    </div>
    <div v-else>
      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="black"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
          v-for="item in items"
          :key="item.nome"  
          :to="item.link"
          active-class="text--primary"
          class="font-weight-bold subtitle"
          >
            <v-list-item-title>{{ item.nome }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>

export default {
  name: 'Header',

  data: () => ({
    file: require("../../data.json"),
    drawer: null,
      items: [
        {
          nome: 'Portfólio',
          link: '/'
        },
        {
          nome: 'Sobre mim & Contato',
          link: '/sobremim'
        }
      ],
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Poppins");

.title{
  font-size: 1.5;
  font-family: Poppins, sans-serif!important;
  font-weight: bold;
}
.subtitle{
  font-size: 1.2;
  color: black;
  font-family: Poppins, sans-serif;
  font-weight: 50;
}
</style>
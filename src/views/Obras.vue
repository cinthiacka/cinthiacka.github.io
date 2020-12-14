<template>
  <div id='portfolio' class="p-0">
    <Header/>
    <section id="welcome" class='p-0 m-0 '>
      <v-layout
        align-center
        column
        justify-start m-0 p-0
      >
        <div class="mb-1 title">{{file.nome}}</div>
        <div class="subtitle">{{file.pagina_1}}</div>
        <br>
      </v-layout>
    </section>
    
    <section id="work" class='p-0 m-0 welcome'>
      <v-row>
        <v-col align="center" justify="center">
          <v-card class="card-float d-inline-block" width="85%" elevation="0">
            <div>
              <br>
            <hr>
              <div class="wrapper">
                <v-tabs centered class="title" v-model="tab">
                  <v-tab v-for="item in file.tags" :key="item" @click="filtro(item.tag)">{{item.titulo}}</v-tab>
                </v-tabs>
                <p v-if="loading" class="text-centered">
                  Carregando...
                </p>
                <ul v-else class="image-card-grid">
                  <image-card
                    v-for="image in gallery"
                    :key="image.id"
                    :image="image"
                    />
                </ul>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <Footer/> 
    </section>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import ImageCard from '../components/ImageCard.vue'
import Footer from '../components/Footer.vue';
import axios from 'axios';

export default {
  name: 'Obras',
  components: {
    Header,
    ImageCard,
    Footer
  },
  data() {
    return {
      file: require("../../data.json"),
      tab:null,
      loading: false,
      tag: '',
      images: [],
      gallery:[]
    }
  },
  created(){
    this.search();
  },
 
  methods: {
    filtro(tag) {
      this.gallery = [];
      this.images.forEach(element => {
        if (element.tags.includes(tag)) { 
          this.gallery.push(
            {
              id: element.id, 
              title: element.title, 
              photo: element.url_o, 
              description: element.description._content, 
              tags: element.tags, 
              is_square:element.tags.includes("1x1"), 
              is_retangle:element.tags.includes("2x1")
            });
          }
        });
      return this.gallery;
    },
    search() {
      this.loading = true;
      this.fetchImages()
        .then((response) => {
          this.images = response.data.photos.photo;
          this.filtro('arte');
          this.loading = false;
        })
    },
    fetchImages() {
      return axios({
        method: 'get',
        url: 'https://api.flickr.com/services/rest',
        params: {
          method: 'flickr.people.getPhotos',
          api_key: process.env.VUE_APP_API_KEY,
          user_id: process.env.VUE_APP_USER_ID,
          extras: 'url_o, tags, description',
          page: 1,
          format: 'json',
          nojsoncallback: 1,
          per_page: 30,
        }
      })
    },
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Poppins");

.welcome{
  height: 90vh !important;
}
.title{
  margin-top: 2em;
  font-size: 3em!important;
  font-family: Poppins, sans-serif !important;
  font-weight: 900;
  color: black!important;
}
.subtitle{
  font-size: 1.2em;
  font-family: Poppins, sans-serif;
  font-weight: 50;
  color: black;
}
.card-float{ 
  margin-top: 0vh;
  margin-bottom: 10vh;
}
.text-centered {
  text-align: center;
}
.wrapper {
  padding: 3em;
  padding-top: 0px;
  margin: 0 auto;
  @media only screen and (max-width: 799px) {
    max-width: 100%;
    margin: 0 1.5rem;
  }
}
.image-card-grid {
  list-style: none;
  margin: .5rem 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
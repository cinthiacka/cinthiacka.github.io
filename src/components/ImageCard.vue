
<template>
   <li :class="{ 'image-card--1': image.is_square, 'image-card--2': image.is_retangle }"> 
    <img class="image-card__image" :src="image.photo" :alt="image.title">
    <div class="image-card__body">
      <div v-if="image.title" class="image-title">
        <a :href="image.photo" target="_blank">
          {{image.title}} 
        </a>
        <br>
        <div class="image-description">
        {{image.description}} 
        </div>
      </div>
      <div v-else class="image-title">Sem Título</div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ImageCard',
  props: [ 'image' ]
}
</script>


<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Poppins");

.image-card--1 {
  max-height: 500px;
  position: relative;  
  width: calc(33% - 1rem);
  margin: .5rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .15);
  background: white;
  @media only screen and (max-width: 799px) {
    width: calc(50% - 1rem);
  }
  @media only screen and (max-width: 549px) {
    width: 100%;
    margin: .5rem 0;
  }
}

.image-card--2 {
  max-height: 500px;
  position: relative;  
  width: calc(66% - 1rem);
  margin: .5rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .15);
  background: white;
  @media only screen and (max-width: 799px) {
    width: calc(50% - 1rem);
  }
  @media only screen and (max-width: 549px) {
    width: 100%;
    margin: .5rem 0;
  }
}
.image-card__image {
  
  transition: transform .2s; /* Animation */
  max-height: 480px;
  display: block;
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: auto;
  object-fit: cover;
}
.image-card__body {
  padding: .5rem 1rem 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #ee44aa;
}
.image-card--1:hover,.image-card--2:hover {
   transform: scale(1.2);
   z-index: 1;
}

.image-card--1:hover .image-card__body {
  opacity: 0.8;
}
.image-card--2:hover .image-card__body {
  opacity: 0.8;
}
a{
  text-decoration: none;
  color: white !important;;
}
.image-title  {
  font-family: Poppins, sans-serif !important;
  font-weight: bold;
  margin: 0;
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.image-description {
  font-family: Poppins, sans-serif !important;
  font-weight: regular !important;
  margin: 0;
  position: contents;
  color: white;
  font-size: 15px;
}
</style>


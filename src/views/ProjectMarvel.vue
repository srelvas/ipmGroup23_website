<template>
<br>
    <h1 class="text-2xl">
        Access our project's prototype in Marvel
    </h1>
    <p> You can access our 
        <a href="https://marvelapp.com/prototype/2c2d9geg" target="_blank" style="color: #69cdbe">
         project here </a> 
    </p>
    <p> Check some of our Marvel screens here: </p>
    <br>
    <!-- <div class="row-auto">
    <img src="../assets/ecraInicialMarvel.jpg" class="Imagem1"/>
    <img src="../assets/ecraLoginMarvel.jpg" class="Imagem2"/>
    </div> -->
   <!--  <vueper-slides
    class="no-shadow"
    :visible-slides="4"
    :arrows="false"
    :slide-ratio="1/3"
    :gap="3"
    :dragging-distance="50">
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
    </vueper-slides> -->
    <div class="slides1">
    <vueper-slides
    class="no-shadow"
    :visible-slides="4"
    :slide-ratio="32/67"
    :dragging-distance="70"
    :gap="3"
    arrows-outside 
    disable-arrows-on-edges
    transition-speed="250">
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
    </vueper-slides>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
    slides: [
        {
        title: 'splash screen',
        image: require("../assets/ecraInicialMarvel.png"),
        //content: "The screen that always greets you when you start the app."
        },
        {
        title: 'log in screen',
        image: require('../assets/ecraLoginMarvel.png'),
        
        },
        {
        title: 'log in screen',
        image: require('../assets/ecraContaGoogleMarvel.png'),
        
        },
        {
        title: 'log in screen',
        image: require('../assets/ecraRegistoMarvel.png'),
        
        },
        {
        title: 'log in screen',
        image: require('../assets/ecraPrincipalMarvel.png'),
        
        },
        {
        title: 'log in screen',
        image: require('../assets/menuMarvel.png'),
        
        },
        {
        title: 'log in screen',
        image: require('../assets/ecraDinoSelecionadoMarvel.png'),
        
        },
        {
        title: 'log in screen',
        image: require('../assets/ecraFavoritosMarvel.png'),
        
        },
        {
        title: 'log in screen',
        image: require('../assets/ecraMuseusMarvel.png'),
        
        },
        {
        title: 'log in screen',
        image: require('../assets/ecraNoticiasMarvel.png'),
        
        },
    ]
})
}
</script>

<style scoped>
    .Imagem1 {
        padding: 10vh;
    }

    /* .thumbnails {
        margin: auto;
        max-width: 300px;
    } */

    .slides1 {
        padding-left: 10vh;
        padding-right: 10vh;
        transform: scale(0.9);
    }
</style>

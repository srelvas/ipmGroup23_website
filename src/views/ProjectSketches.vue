<template>
<br>
    <h1 class="text-xl"> Below you can see our earliest sketches:</h1>
    <div class="sketchContainer">
        <div
        class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 items-center"
      >
        <!-- <ul >
            <li v-for="sketch in sketches " :key="sketch.id">
                <img :src="sketch.url"/>
            </li>
        </ul> -->

        <!-- <vueper-slides
        class="no-shadow"
        :visible-slides="1"
        :slide-ratio="64 / 34"
        fixed-height
        :dragging-distance="70">
        <vueper-slide v-for="(sketch, i) in sketches" :key="i" :image="sketch.url" />
        </vueper-slides> -->

        
        <tr v-for="sketch in sketches" :key="sketch.id"
        class="group relative">
                    
            <td><img :src="sketch.url"/></td>
        </tr>
    </div>
    </div>
</template>

<script>
/* import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css' */

export default {
    setup() {
        
    },
    //components: { VueperSlides, VueperSlide },
    data: () => ({
        sketches: [
            {
                id: 1,
                url: require("../assets/1Sketches.jpg")
            },
            {
                id: 2,
                url: require("../assets/2Sketches.jpg")
            },
            {
                id: 3,
                url: require("../assets/3Sketches.jpg")
            },
            {
                id: 4,
                url: require("../assets/4Sketches.jpg")
            },
        ]
    })
}
</script>

<style scoped>
    .sketchContainer {
        padding-left: 10vh;
        padding-right: 10vh;
        /* transform: scale(0.4); */
    }

    .vueperslides--fixed-height { height: 290vh; }
</style>

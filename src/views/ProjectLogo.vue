<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <br>
  <h1 class="text-2xl font-extrabold tracking-tight text-black-500 items-center">Logo evolution</h1>
  <h2 class="text-lg font tracking-tight text-black-500 items-center">Below we show the evolution of our logo that took place in the earlier stages of development</h2>
  <br>
  <div class="motherBox">
  <div class="logoEvolutionBox">
    <div class="flex flex-col justify-center items-center pt-10">
    <div class="flow-root">
      <ul role="list" class="-mb-8">
        <li v-for="(event, eventIdx) in timeline" :key="event.id">
          <div class="relative pb-8">
            <!-- <span v-if="(eventIdx !== timeline.length - 1)" class="absolute top-6 left-6 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"> -->
            <div class="arrowsLogo">
              <span v-if="event.id>1 && eventIdx!==timeline.length">
                <img src="../assets/arrowDown.png" class="h-16 w-16"/>
              </span>
            </div>
            <br>
            <div class="relative flex space-x-3">
              <div>
                <span class="h-40 w-40 rounded-full flex items-center justify-center ring-8 ring-yellow-300 ring-opacity-50">
                  <!-- <component :is="event.icon" class="h-5 w-5 text-white" aria-hidden="true" /> -->
                  <img :src="require(`../assets/${event.logo}`)"/>
                </span>
              </div>
              <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p class="text-sm text-gray-500">
                    {{ event.content }} <a :href="event.href" class="font-medium text-gray-900">{{ event.target }}</a>
                  </p>
                </div>
                <div class="text-right text-sm whitespace-nowrap text-gray-500">
                  <time :datetime="event.datetime">{{ event.date }}</time>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    </div>
  </div>
  </div>
  <!-- <div>
    <ul role="list" class="-mb-8 flex flex-row justify-center">
      <li v-for="(event) in timeline" :key="event.id">
        <span v-if="(event.id>1 && eventIdx !== timeline.length)" class="h-40 w-40">
          <img src="../assets/arrow.png" class="h-10 w-10"/>
        </span>
        <span class="h-40 w-40 rounded-full flex items-center justify-center ring-8 ring-white">
          <img :src="require(`../assets/${event.logo}`)"/>
        </span>
      </li>
    </ul>
  </div> -->
</template>

<script>
import { /* CheckIcon, ThumbUpIcon, UserIcon */ } from '@heroicons/vue/solid'

const timeline = [
  {
    id: 1,
    content: '1st Logo:',
    target: "Dinosaur skull over a location pin with Portugal flag pattern. However location pin was not obvious, the flag's colours and general design seemed to give the application a less polished and less serious look.",
    href: '#',
    date: 'Oct 10',
    datetime: '2020-09-20',
    logo: "logo1.png",
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: '2nd Logo:',
    target: "A full T-Rex dinosaur over a black location pin, but with no indication of the application's focus on Portugal",
    href: '#',
    date: 'Oct 15',
    datetime: '2020-09-22',
    logo: "logo2.png",
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: '3rd Logo:',
    target: 'Adition of small portuguese flag to dinosaur in Logo as reference to the application greater focus on Portugal. The title of the app was also chosen to be DinoMapa (as the portuguese for map) in indication of its focus.',
    href: '#',
    date: 'Oct 20',
    datetime: '2020-09-28',
    logo: "iconIPM.png",
    iconBackground: 'bg-green-500',
  },
  /* {
    id: 4,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: "../assets/",
    iconBackground: 'bg-blue-500',
  },
  {
    id: 5,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  }, */
]

export default {
  /* data: function(){
    return {
      arrow=ArrowNarrowRight,
    }
  }, */
  setup() {
    return {
      timeline,
    }
  },
}
</script>

<style>
  .logoEvolutionBox{
    border-radius: 25px;
    background: #ffe0a7;
    padding: 20px; 
    left: 10vh;
    right:10vh;
    /* width: 200px;
    height: 150px; */
  }

  .motherBox{
    padding-left:20vh;
    padding-right:20vh;
  }

  .arrowsLogo {
    padding-left:7vh;
  }
</style>
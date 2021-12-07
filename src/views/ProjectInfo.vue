<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
        Evolution and selection of app colour scheme
      </h2>
      <h3 class="text-xl font-extrabold tracking-tight text-gray-500">
        This shows the evolution of the colour scheme from left to right
      </h3>
      <div
        class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 items-center"
      >

        <button
          @click="productClicked(product)"
          v-for="product in productsColorScheme"
          :key="product.id"
          class="group relative"
        >
          <div
            class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
          >
            <img
              :src="require(`../assets/${product.imageSrc}`)"
              :alt="product.imageAlt"
              class="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
          <br />
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                {{ product.description }}
              </p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.num }}</p>
          </div>
        </button>

        <TransitionRoot as="template" :show="open">
          <Dialog
            as="div"
            class="fixed z-10 inset-0 overflow-y-auto"
            @close="open = false"
          >
            <div
              class="flex min-h-screen text-center md:block md:px-2 lg:px-4"
              style="font-size: 0;"
            >
              <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in duration-200"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <DialogOverlay
                  class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block"
                />
              </TransitionChild>

              <!-- This element is to trick the browser into centering the modal contents. -->
              <span
                class="hidden md:inline-block md:align-middle md:h-screen"
                aria-hidden="true"
                >&#8203;</span
              >
              <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enter-to="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leave-from="opacity-100 translate-y-0 md:scale-100"
                leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              >
                <div
                  class="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl"
                >
                  <div
                    class="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
                  >
                    <button
                      type="button"
                      class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                      @click="open = false"
                    >
                      <span class="sr-only">Close</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div
                      class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8"
                    >
                      <div
                        class="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5"
                      >
                        <img
                          :src="require(`../assets/${productChosen.imageSrc}`)"
                          :alt="productChosen.imageAlt"
                          class="object-center object-cover"
                        />
                      </div>
                      <div class="sm:col-span-8 lg:col-span-7">
                        <h2
                          class="text-2xl font-extrabold text-gray-900 sm:pr-12"
                        >
                          {{ productChosen.name }}
                        </h2>

                        <section
                          aria-labelledby="information-heading"
                          class="mt-2"
                        >
                          <p class="text-2xl text-gray-900">
                            {{ productChosen.num }}
                          </p>
                          <img
                            :src="
                              require(`../assets/${productChosen.imagePalette}`)
                            "
                          />
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </TransitionChild>
            </div>
          </Dialog>
        </TransitionRoot>
      </div>
    </div>

    <div
      x-ref="handle"
      @mouseenter="openSideMenuFunction()"
      class="sr-only sm:not-sr-only sm:border-l sm:bg-gray-100 sm:absolute sm:left-0 sm:inset-y-0 sm:flex sm:items-center sm:w-4 cursor-[ew-resize]"
      style="touch-action: none"
    >
      <div class="absolute inset-y-0 -inset-x-2"></div>
      <svg
        aria-hidden="true"
        class="h-4 w-4 text-gray-600 pointer-events-none"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5h2v14H8zM14 5h2v14h-2z"></path>
      </svg>
    </div>
    <TransitionRoot as="template" :show="openSideMenu">
      <Dialog
        as="div"
        class="fixed inset-0 overflow-hidden"
        @close="openSideMenu = false"
      >
        <div class="absolute inset-0 overflow-hidden">
          <TransitionChild
            as="template"
            enter="ease-in-out duration-500"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in-out duration-500"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
          </TransitionChild>

          <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <div class="w-screen max-w-md">
                <div
                  class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll"
                >
                  <div class="px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900">
                        Panel title
                      </DialogTitle>
                      <div class="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none "
                          @click="openSideMenu = false"
                        >
                          <span class="sr-only">Close panel</span>
                          <XIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="mt-6 relative flex-1 px-4 sm:px-6">
                    <!-- Replace with your content -->
                    <div class="absolute inset-0 px-4 sm:px-6">
                      <div
                        class="h-full border-2 border-dashed border-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                    <!-- /End replace -->
                  </div>
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  /* RadioGroup,
  RadioGroupLabel,
  RadioGroupOption, */
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";
/* import { StarIcon } from '@heroicons/vue/solid' */
import { DialogTitle } from "@headlessui/vue";

const productChosen = {};

const productsColorScheme = [
  {
    id: 1,
    name: "First colour scheme",
    /* href: "#", */
    imageSrc: "appColorScheme1_2x.png",
    imageAlt: "Soft Orange and Yellow Scheme",
    imagePalette: "palette1.png",
    num: "#1",
    description: "Soft beige and pastel yellow scheme",
  },
  {
    id: 2,
    name: "Second colour scheme",
    /* href: "#", */
    imageSrc: "appColorScheme2_2x.png",
    imageAlt: "Soft Green Scheme",
    imagePalette: "palette2.png",
    num: "#2",
    description: "Soft and pastel green scheme",
  },
  {
    id: 3,
    name: "Third colour scheme",
    /* href: "#", */
    imageSrc: "appColorScheme3_2_2x.png",
    imageAlt: "Hard Orange and Brown Scheme",
    imagePalette: "palette3.png",
    num: "#3",
    description: "Soft orange and brown scheme",
  },
  {
    id: 4,
    name: "Fourth colour scheme",
    /* href: "#", */
    imageSrc: "appColorScheme4_2x.png",
    imageAlt: "Hard Orange and Brown Scheme",
    imagePalette: "palette4.png",
    num: "#4",
    description: "Hard orange, baby blue and salmon scheme",
  },
  // More products...
];

export default {
  components: {
    Dialog,
    DialogOverlay,
    /* RadioGroup,
        RadioGroupLabel,
        RadioGroupOption, */
    TransitionChild,
    TransitionRoot,
    //StarIcon,
    XIcon,
    DialogTitle,
  },
  setup() {
    const open = ref(false);
    //const selectedColor = ref(productChosen.colors[0]);
    //const selectedSize = ref(productChosen.sizes[2]);
    const openSideMenu = ref(false);

    return {
      productsColorScheme,
      productChosen,
      open,
      //selectedColor,
      //selectedSize,
      openSideMenu,
    };
  },
  methods: {
    productClicked(product) {
      this.open = true;
      this.productChosen = product;
    },
    openSideMenuFunction() {
      this.openSideMenu = true;
    },
  },
};
</script>

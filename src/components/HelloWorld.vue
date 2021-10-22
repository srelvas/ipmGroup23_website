<template>
  <Popover class="relative bg-babyblue">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center border-b-2 border-babyblue py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">IPM Group 23</span>
            <router-link to="/ipmGroup23_website/">
              <img
                class="h-8 w-auto sm:h-20"
                src="../assets/iconIPM.png"
                alt="logotipo do dinomap"
              />
            </router-link>
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[
                open ? 'text-gray-900' : 'text-gray-500',
                'group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-babyblue',
              ]"
            >
              <span>Assignments</span>
              <ChevronDownIcon
                :class="[
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500',
                ]"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 lg:max-w-3xl"
              >
                <div
                  class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                >
                  <div
                    class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2"
                  >
                    <router-link
                      :to="'/ipmGroup23_website/assignments' + item.num"
                      v-for="item in solutions"
                      :key="item.name"
                      class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <img
                        v-if="item.name == 'Assignment 1'"
                        src="../assets/likeDislike.png"
                        class="flex-shrink-0 h-9 w-9"
                        aria-hidden="true"
                      />
                      <component
                        v-else
                        :is="item.icon"
                        class="flex-shrink-0 h-9 w-9 text-orange"
                        aria-hidden="true"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </router-link>
                  </div>
                  <!-- <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                      <a :href="item.href" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                        <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                        <span class="ml-3">{{ item.name }}</span>
                      </a>
                    </div>
                  </div> -->
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[
                open ? 'text-gray-900' : 'text-gray-500',
                'group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-babyblue',
              ]"
            >
              <span>Project</span>
              <ChevronDownIcon
                :class="[
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500',
                ]"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 lg:max-w-3xl"
              >
                <div
                  class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                >
                  <div
                    class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2"
                  >
                    <router-link
                      :to="'/ipmGroup23_website/project' + item.stage"
                      v-for="item in solutionsProject"
                      :key="item.name"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <component
                        :is="item.icon"
                        class="flex-shrink-0 h-8 w-8 text-orange"
                        aria-hidden="true"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </router-link>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <router-link
            to="/ipmGroup23_website/about"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            About us
          </router-link>
        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <img class="max-h-12" src="../assets/novaLogo.png" alt="nova icon" />
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="../assets/iconIPM.png" />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <!-- <div class="mt-6">
              <nav class="grid gap-y-8">
                <a
                  v-for="item in solutions"
                  :key="item.name"
                  :href="item.href"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <component
                    :is="item.icon"
                    class="flex-shrink-0 h-9 w-9 text-orange"
                    aria-hidden="true"
                  />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </a>
              </nav>
            </div> -->
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>

  <router-view />
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  //CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  //RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  //ViewGridIcon,
  ColorSwatchIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";

const solutions = [
  {
    name: "Assignment 1",
    description: "Good and bad interface.",
    href: "#",
    num: 1,
    icon: ChartBarIcon,
  },
  /*{
    name: "Assignment 2",
    description: "To be determined.",
    href: "#",
    num: 2,
    icon: CursorClickIcon,
  },
  {
    name: "Assignment 3",
    description: "To be determined.",
    href: "#",
    num: 3,
    icon: CursorClickIcon,
  },
  {
    name: "Assignment 4",
    description: "To be determined.",
    href: "#",
    num: 4,
    icon: CursorClickIcon,
  },*/
];
const solutionsProject = [
  {
    name: "App Color Scheme",
    description: "Evolution and selection of app colour scheme",
    href: "#",
    stage: "Fase1",
    icon: ColorSwatchIcon,
  },
  /*{
    name: "TBD2",
    description: "To be determined.",
    href: "#",
    stage: "Fase2",
    icon: CursorClickIcon,
  },
  {
    name: "TBD3",
    description: "To be determined.",
    href: "#",
    stage: "Fase1",
    icon: CursorClickIcon,
  },
  {
    name: "TBD4",
    description: "To be determined.",
    href: "#",
    stage: "Fase1",
    icon: CursorClickIcon,
  },*/
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

export default {
  /* computed: {
    assignmentNum: function() {
      return "/assignments"+this.item.num;
    }
  }, */
  /* data:{
    assignmentNum:"/assignments"
  }, */
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
    ColorSwatchIcon,
  },
  setup() {
    return {
      solutions,
      solutionsProject,
      callsToAction,
      resources,
      recentPosts,
    };
  },
};
</script>

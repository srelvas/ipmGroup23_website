<template>
  <div class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div class="space-y-5 sm:space-y-4">
          <h2
            class="text-3xl text-orange font-extrabold tracking-tight sm:text-4xl"
          >
            Our Group
          </h2>
          <p class="text-xl text-gray-500">
            Hi there. We are the group 23 of IPM class and this is our web site.
            Here we present our assignments and project progress.
          </p>
        </div>
        <div class="lg:col-span-2">
          <ul
            role="list"
            class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            <li v-for="person in people" :key="person.name">
              <div class="space-y-4">
                <div class="aspect-w-3 aspect-h-2">
                  <img
                    class="object-cover shadow-lg rounded-lg"
                    :src="require(`../assets/${person.imageName}`)"
                    alt=""
                  />
                </div>
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3>{{ person.name }}</h3>
                  <p class="text-orange">{{ person.role }}</p>
                </div>
                <!--<div class="text-lg">
                  <p class="text-gray-500">{{ person.bio }}</p>
                </div>-->

                <ul role="list" class="flex space-x-5">
                  <li>
                    <a
                      :href="person.gitHub"
                      class="text-gray-400 hover:text-gray-500"
                    >
                      <span class="sr-only">Github</span>
                      <!-- <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg> -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        style="opacity: 0.4; filter: alpha(opacity=40)"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      :href="person.linkedinUrl"
                      class="text-gray-400 hover:text-gray-500"
                    >
                      <span class="sr-only">LinkedIn</span>
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const people = [
  {
    name: "Manuel Soares",
    role: "55937",
    imageName: "manuel.jpg",
    bio:
      "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    gitHub: "https://github.com/Manthel",
    linkedinUrl: "https://www.linkedin.com/in/makesoares/",
  },
  {
    name: "Sara Relvas",
    role: "55596",
    imageName: "sara.jpeg",
    bio:
      "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    gitHub: "https://github.com/srelvas",
    linkedinUrl: "https://www.linkedin.com/in/srelvas/",
  },
  {
    name: "Pedro Coelho",
    role: "54939",
    imageName: "pedro.jpg",
    bio:
      "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    gitHub: "https://github.com/peter-tmc",
    linkedinUrl: "https://www.linkedin.com/in/pedro-coelho-0435731a5/",
  },
  // More people...
];

export default {
  setup() {
    return {
      people,
    };
  },
  methods: {
    getImgUrl(person) {
      console.log("../assets/" + person, person);
      return "../assets/" + person;
    },
  },
};
</script>

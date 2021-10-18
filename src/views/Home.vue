<template>
  <div class="home">
    <br>
    <br>
    <br>
    <div class="relative">
      <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
          <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div class="absolute inset-0">
              <img
                class="h-full w-full object-cover"
                src="../assets/dinosaurs.jpg"
                alt="dinosaurs"
              />
            <div class="absolute inset-0 mix-blend-multiply"></div>
          </div>
          <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 class="text-center text-4xl
              font-bold
              tracking-tight
              sm:text-5xl
              lg:text-6xl"
            >
              <span class="block text-blue">
                Discover the rich paleontologycal past
              </span>
              <span class="block text-blue">that Portugal has</span>
            </h1>
            <p class="
                mt-6
                max-w-lg
                mx-auto
                text-center text-l text-blue
                sm:max-w-3xl
              "
            >
              With your app you will be able to learn more about Portugal
              paleontology mainly dinossaurs and fosseis tan tan tan
            </p>
            <div class="
                      mt-10
                      max-w-sm
                      mx-auto
                      sm:max-w-none sm:flex sm:justify-center
                    "
            >
              <div>
                <a href="#"
                  class="flex
                          items-center
                          justify-center
                          px-4
                          py-3
                          border border-transparent
                          text-base
                          font-medium
                          rounded-md
                          shadow-sm
                          text-yellow-600
                          bg-gray-200
                          hover:bg-indigo-50
                          sm:px-8
                        "
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style scoped>
  /* .home{
    background-image: url(https://as2.ftcdn.net/v2/jpg/01/87/14/61/500_F_187146143_psgUMhXzG3MUVz6OgE8XXy2X1Nw8icWN.jpg);
  } */
</style>

<template>
  <div>
    <!-- Features -->
    <div class="max-w-[100vw] m-2 normal">
      <div class="px-2 sm:px-6 lg:px-2">
        <div
          class="relative h-120 md:h-[90dvh] aspect-w-16 aspect-h-7 flex flex-col bg-[url('/assets/img/accomodations.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden">

          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-tr from-black to-transparent z-10"></div>

          <!-- Content on top of gradient -->
          <div class="relative z-20 mt-auto md:p-8 p-4 lg:px-16 2xl:p-20">
            <p class="text-white uppercase text-xs lg:text-sm 2xl:text-[1.3rem]">Accomodations</p>
            <h1 class="text-4xl sm:text-6xl md:text-4xl  lg:text-6xl 2xl:text-[5.8rem] text-white heading">
              Coming Soon
            </h1>
          </div>

        </div>
      </div>
      <div class="md:p-16 p-4 lg:px-16 2xl:px-20">
        <div class="2xl:w-[70vw] lg:w-[60vw] md:w-[70vw] my-8 mb-2 sm:mb-2 md:mb-2">

          <h2 class="heading w-full text-4xl sm:text-6xl md:text-4xl  lg:text-6xl  2xl:text-[5.8rem] text-neutral-900 font-semibold">
            We are excited to soon offer group homes and day centres for our NDIS participants. </h2>
        </div>

        <!-- Blog Article -->
        <div class="lg:max-w-1/2 md:max-w-2/3 px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto text-xs lg:text-sm 2xl:text-[1.3rem] mb-28">
          <div class="">

            <!-- Content -->
            <div class="space-y-5 md:space-y-8">


              <p class="">
                Taley is excited to soon offer group homes and day centres for our NDIS participants.
                These will be specially designed living spaces and activity centres where people can live and spend time
                together. Our future group homes will provide 24/7 support with trained staff on-site, in a safe,
                comfortable shared house. Each home will be set up to suit the needs of its residents. Just like other
                quality providers, we will tailor houses to individuals’ personalities and needs. People who need
                around-the-clock care will be able to live in a supported independent living (SIL) home with all the
                support they require
              </p>
            </div>
            <!-- End Content -->
            <!-- Content -->
            <div class="mt-5 md:space-y-2">

              <p class="">
                Similarly, our upcoming day centres will offer a welcoming place for daytime activities – from
                skill-building workshops to social outings and therapy. Day programs will focus on community access,
                leisure and learning in a group environment.
              </p>
            </div>
            <!-- End Content -->

            <!-- Content -->
            <div class="mt-5 md:space-y-2">

              <p class="">
                <span class="font-semibold">We’ll post full details on our website</span> and advise interested
                participants as soon as these services launch. For now, you can contact us if you’re interested in our
                planned SIL group homes or day centre programs, and we’ll keep you updated.
              </p>
            </div>
            <!-- End Content -->
          </div>
        </div>
        <div class="space-y-4 2xl:mb-16 mb-8 lg:text-lg 2xl:text-[1.8rem] text-md md:text-sm">
          <h1 class="font-semibold text-[1.2rem] md:text-[1.3rem] 2xl:text-[1.8rem]">UPCOMING HOMES</h1>
          <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-6 h-full">
            <div v-for="home in homes">
              <div class="w-full h-42 lg:h-64 2xl:h-[40vh]  bg-gray-100  rounded-xl overflow-clip ">
                <img class="size-full object-cover object-center hover:scale-110 transition-all duration-300 cursor-pointer" :src="home.image" :alt="home.name">
              </div>
              <div class="space-y-4 mt-2 2xl:space-y-8">
                <div class="space-y-2 2xl:space-y-3  ">
                  <div class="lg:flex justify-between items-center gap-2">
                    <p class="font-semibold text-[1.2rem] md:text-[1.3rem] 2xl:text-[1.8rem]">{{ home.name }}</p>
                    <p class="font-semibold text-[1rem] md:text-[1.2rem] 2xl:text-[1.4rem]">{{ home.feature }}</p>
                  </div>
                  <div class="font-semibold text-[1rem] md:text-[1.2rem] 2xl:text-[1.4rem] flex items-center gap-1">
                    <Icon name="mdi:map-marker-outline" />
                    <p>{{ home.location }}</p>
                  </div>
                </div>
                
                <button class="rounded-md border w-full p-2 2xl:p-4 mt-4 font-semibold outline-none text-[1.2rem] md:text-[1.3rem] 2xl:text-[1.8rem]">Coming
                  Soon</button>
              </div>
            </div>

          </div>
        </div>
        <!-- End Blog Article -->

      </div>
    </div>
    <!-- End Features -->
  </div>
</template>


<script setup lang="tsx">
const homes = [
  {
    name: "Canning Vale Shared Home",
    feature: "3 Bedrooms",
    location: "Canning Vale, WA",
    image: "/images/homes/homeinterior.jpg"
  },
  {
    name: "Sunset Valley Retreat",
    feature: "4 Bedrooms",
    location: "Sunset Valley",
    image: "/images/homes/outdoor.jpg"
  },
  {
    name: "Riverbend Family House",
    feature: "5 Bedrooms",
    location: "Riverbend, TX",
    image: "/images/homes/indoor.jpg"
  },
]


const getImageUrl = (image: string) => {
  return new URL(`~/assets/img/${image}`, import.meta.url).href
}

</script>
<template>
  <div>
    <!-- Features -->
    <div class="max-w-[100vw] m-2">
      <div class="px-2 sm:px-6 lg:px-2">
        <div
          class="relative h-120 md:h-[90dvh] aspect-w-16 aspect-h-7 flex flex-col bg-[url('/assets/img/accomodations.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden">

          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-tr from-black to-transparent z-10"></div>

          <!-- Content on top of gradient -->
          <div class="relative z-20 mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
            <p class="text-white uppercase text-lg md:text-xl">Accomodations</p>
            <h1 class="text-2xl sm:text-3xl lg:text-7xl  text-white">
              Coming Soon
            </h1>
          </div>

        </div>
      </div>
      <div class="md:p-8 p-4 2xl:p-12">
        <div class="w-[60vw] my-8 mb-2 sm:mb-2 md:mb-2">

          <h2 class="font-awesome-serif w-full text-2xl sm:text-3xl lg:text-7xl text-neutral-900 font-semibold">
            We are excited to soon offer group homes and day centres for our NDIS participants. </h2>
        </div>

        <!-- Blog Article -->
        <div class="lg:max-w-1/2 px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
          <div class="max-w-2xl">

            <!-- Content -->
            <div class="space-y-5 md:space-y-8 text-gray-800 text-md 2xl:text-lg">


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
        <div class="space-y-4 2xl:mb-16 mb-8">
          <h1 class="font-semibold 2xl:text-[1.8rem]">UPCOMING HOMES</h1>
          <div class="grid grid-cols-1  md:grid-cols-3 gap-4 h-full">
            <div v-for="i in 3" class="h-[50vh">
              <div class="w-full h-42 lg:h-64 2xl:h-[40vh] bg-gray-400 rounded-md"></div>
              <div class="space-y-2 mt-2 2xl:text-[1.8rem] text-[0.9rem] md:text-[0.7rem] lg:text-[1rem] 2xl:space-y-4">
                <div class="flex justify-between items-center">
                  <p class="font-semibold">Canning Vale Shared Home</p>
                  <p class="font-semibold">3 Bedrooms</p>
                </div>
                <p class="font-semibold 2xl:text-2xl">Canning Vale, WA</p>
                <button class="rounded-md border w-full p-2 2xl:p-4 font-semibold outline-none">Coming Soon</button>
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
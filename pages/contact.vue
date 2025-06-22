<template>
    <div class="max-w-[100vw] m-2">
        <!-- header -->
        <div class="px-2 sm:px-6 lg:px-2">
            <div
                class="relative h-120 md:h-[40vh] aspect-w-16 aspect-h-7 flex flex-col bg-[url('/assets/img/accomodations.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden">

                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-tr from-black to-transparent z-10"></div>

                <!-- Content on top of gradient -->
                <div class="relative z-20 mt-auto ps-5 pb-5 md:ps-10 md:pb-20">
                    <h1 class="text-xl md:text-3xl lg:text-5xl text-white text-center">
                        Get in Touch
                    </h1>
                </div>

            </div>
        </div>
        <div class="w-full flex flex-col items-center">
            <div class=" py-8 2xl:py-14 md:w-1/3 self-center space-y-8 2xl:space-y-16">
                <div class="bg-gray-100 p-6 2xl:p-12 rounded-md space-y-4">
                    <div class="justify-between items-center flex">
                        <p class="text-gray-400">CONTACT INFORMATION</p>
                        <div>icons</div>
                    </div>
                    <div>
                        <p class="text-gray-800"><span class="font-bold">Phone</span>: +1(001) 961-76-17</p>
                        <p class="text-gray-800"><span class="font-bold">Email</span>: info@taleyorg.com</p>
                    </div>
                </div>

                <!-- contact form -->
                <form class="flex flex-col space-y-4 2xl:space-y-6" @submit.prevent="">
                    <div>
                        <label for="name" class="mb-4 font-semibold text-gray-400">Full Name*</label>
                        <input type="text" id="name" placeholder="Full Name"
                            class="text-black placeholder:text-black p-4 mt-2 2xl:p-6 w-full border border-gray-400 rounded-md">
                    </div>
                    <div>
                        <label for="email" class="mb-4 font-semibold text-gray-400">Email*</label>
                        <input type="text" id="email" placeholder="Email Address"
                            class="text-black placeholder:text-black p-4 mt-2 2xl:p-6 w-full border border-gray-400 rounded-md">
                    </div>
                    <div>
                        <label for="phone" class="mb-4 font-semibold text-gray-400">Phone Number*</label>
                        <input type="text" id="phone" placeholder="Phone Number"
                            class="text-black placeholder:text-black p-4 mt-2 2xl:p-6 w-full border border-gray-400 rounded-md">
                    </div>
                    <div class="space-y-4 2xl:space-y-6">
                        <label for="who" class="mb-4 font-semibold text-gray-400">Who are you?*</label>
                        <div class="space-y-4 2xl:space-y-6 mt-2">
                            <div class="flex items-center" v-for="type in state.types">
                                <input type="checkbox" :checked="state.selected === type.id" name="who" :id="type.id"
                                    @change="handleChange(type.id)" class="bg-red-500 h-5 w-5">
                                <label :for="type.id" class=" font-semibold text-gray-500 ml-4">{{ type.label }}
                                </label>
                            </div>
                            
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <label for="message" class="font-semibold text-gray-400">Message</label>
                        <textarea name="message" id="message"
                            class="text-black placeholder:text-black p-4 mt-2 2xl:p-6 w-full border border-gray-400 rounded-md"
                            placeholder="Write your message here..."></textarea>
                    </div>
                    <button class="bg-black w-full rounded-full p-2 2xl:p-4 mt-4 text-white" @submit.prevent="">Submit</button>

                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const state = reactive({
    selected: '',
    types: [
        {
            label: "NDIS Participant",
            id: "participant"
        },
        {
            label: "Service Provider",
            id: "serviceProvider"
        },
        {
            label: "Parent Guardian or Family Member",
            id: "family"
        },
        {
            label: "Support Coordinator",
            id: "coordinator"
        },
        {
            label: "Allied Health Professional",
            id: "professional"
        },
        {
            label: "Other",
            id: "other"
        },
    ]
})


const handleChange = (value: string) => {

    state.selected = state.selected === value ? '' : value
    console.log(value, " ", state.selected)
}

</script>
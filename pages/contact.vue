<template>
    <div class="max-w-[100vw] m-2">
        <!-- header -->
        <div class="px-2 sm:px-6 lg:px-2">
            <div
                class="relative h-[40vh] md:h-[30vh] aspect-w-16 aspect-h-7 flex flex-col bg-[url('/assets/img/contactus.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden">

                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-tr from-black to-transparent z-10"></div>

                <!-- Content on top of gradient -->
                <div class="relative z-20 mt-auto ps-5 pb-5 md:ps-0 md:pb-20">
                    <h1 class="text-4xl sm:text-5xl lg:text-7xl 2xl:text-8xl heading absolute bottom-10 lg:bottom-20 w-full text-white text-center">
                        Get in Touch
                    </h1>
                </div>

            </div>
        </div>
        <div class="w-full flex flex-col items-center normal">
            <div class=" py-8 2xl:py-14  self-center space-y-8 2xl:space-y-16">
                <div
                    class="justify-between rounded-lg bg-gray-100 p-6 2xl:p-8 items-start md:flex gap-8 md:gap-16 lg:gap-x-24 2xl:gap-x-44  space-y-4">
                    <div class="space-y-4">
                        <p class="text-gray-400">CONTACT INFORMATION</p>

                        <div>
                            <p class="text-gray-800"><span class="font-bold">Phone</span>: +1(001) 961-76-17</p>
                            <p class="text-gray-800"><span class="font-bold">Email</span>: info@taleyorg.com</p>
                        </div>
                    </div>
                    <div class="flex items-center text-2xl 2xl:text-4xl gap-2">
                        <a href="#">
                            <Icon name="mdi:send" class="-rotate-45 h-full  w-12" />
                        </a>
                        <a href="#">
                            <Icon name="ant-design:instagram-filled" class="h-12 w-12" />
                        </a>
                        <a href="#">
                            <Icon name="ant-design:facebook-filled" class="h-12 w-12" />
                        </a>
                        <a href="#">
                            <Icon name="mdi:whatsapp" class="h-12 w-12" />
                        </a>
                    </div>
                </div>

                <!-- contact form -->
                <form class="flex flex-col space-y-4 2xl:space-y-6" @submit.prevent="">
                    <div>
                        <label for="name" class="mb-4 font-[400] text-gray-400">Full Name*</label>
                        <input type="text" id="name" placeholder="Full Name"
                            class="text-gray-700 placeholder:text-gray-600 outline-none p-4 mt-2 2xl:p-6 w-full border border-gray-400 rounded-md">
                    </div>
                    <div>
                        <label for="email" class="mb-4 font-[400] text-gray-400">Email*</label>
                        <input type="text" id="email" placeholder="Email Address"
                            class="text-gray-700 placeholder:text-gray-600 outline-none p-4 mt-2 2xl:p-6 w-full border border-gray-400 rounded-md">
                    </div>
                    <div>
                        <label for="phone" class="mb-4 font-[400] text-gray-400">Phone Number*</label>
                        <input type="text" id="phone" placeholder="Phone Number"
                            class="text-gray-700 placeholder:text-gray-600 outline-none p-4 mt-2 2xl:p-6 w-full border border-gray-400 rounded-md">
                    </div>
                    <div class="space-y-4 2xl:space-y-6">
                        <label for="who" class="mb-4 font-[400] text-gray-400">Who are you?*</label>
                        <div class="space-y-4 2xl:space-y-6 mt-2">
                            <div class="flex items-center" v-for="type in state.types">
                                <input type="checkbox" :checked="state.selected === type.id" name="who" :id="type.id"
                                    @change="handleChange(type.id)" class="bg-red-500 h-5 w-5 2xl:h-8 2xl:w-8 rounded-full">
                                <label :for="type.id" class=" font-[400] text-gray-600 ml-4">{{ type.label }}
                                </label>
                            </div>

                        </div>
                    </div>
                    <div class="flex flex-col">
                        <label for="message" class="font-[400] text-gray-400">Message</label>
                        <textarea name="message" id="message"
                            class="text-gray-700 placeholder:text-gray-600 outline-none p-4 mt-2 2xl:p-6 w-full border border-gray-400 rounded-md"
                            placeholder="Write your message here..."></textarea>
                    </div>
                    <button class="bg-black w-full rounded-full p-2 2xl:p-4 mt-4 text-white"
                        @submit.prevent="">Submit</button>

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
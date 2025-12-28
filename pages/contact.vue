<template>
  <div class="max-w-[100vw] m-2">
    <!-- header -->
    <div class="px-2 sm:px-6 lg:px-2">
      <div
        class="relative h-[40vh] md:h-[30vh] aspect-w-16 aspect-h-7 flex flex-col bg-[url('/assets/img/contactus.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden"
      >
        <!-- Gradient Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-tr from-black to-transparent z-10"
        ></div>

        <!-- Content on top of gradient -->
        <div class="relative z-20 mt-auto ps-5 pb-5 md:ps-0 md:pb-20">
          <h1
            class="text-4xl sm:text-5xl lg:text-7xl 2xl:text-8xl heading absolute bottom-10 lg:bottom-20 w-full text-white text-center"
          >
            Get in Touch
          </h1>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col items-center">
      <div class="py-8 2xl:py-14 self-center space-y-8 2xl:space-y-16">
        <div
          class="justify-between rounded-lg bg-gray-100 p-6 2xl:p-8 items-start md:flex gap-8 md:gap-16 lg:gap-x-24 2xl:gap-x-44 space-y-4"
        >
          <div class="space-y-4">
            <p class="text-gray-400">CONTACT INFORMATION</p>

            <div>
              <p class="text-gray-800">
                <span class="font-bold">Phone</span>: +1(001) 961-76-17
              </p>
              <p class="text-gray-800">
                <span class="font-bold">Email</span>: rozyokumu.com
              </p>
            </div>
          </div>
          <div class="flex items-center text-2xl 2xl:text-4xl gap-2">
            <a href="#">
              <Icon name="mdi:send" class="-rotate-45 h-full w-12" />
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
        <form
          class="flex flex-col space-y-4 2xl:space-y-6"
          @submit.prevent="sendContact"
        >
          <div>
            <label for="name" class="mb-4 font-semibold text-gray-400"
              >Full Name*</label
            >
            <input
              v-model="form.fullName"
              type="text"
              id="name"
              placeholder="Full Name"
              class="text-gray-700 placeholder:text-gray-600 outline-none p-4 mt-2 w-full border border-gray-400 rounded-md"
            />
          </div>

          <div>
            <label for="email" class="mb-4 font-semibold text-gray-400"
              >Email*</label
            >
            <input
              v-model="form.email"
              type="text"
              id="email"
              placeholder="Email Address"
              class="text-gray-700 placeholder:text-gray-600 outline-none p-4 mt-2 w-full border border-gray-400 rounded-md"
            />
          </div>

          <div class="flex flex-col">
            <label for="message" class="font-semibold text-gray-400"
              >Message</label
            >
            <textarea
              v-model="form.message"
              name="message"
              id="message"
              class="text-gray-700 placeholder:text-gray-600 outline-none p-4 mt-2 2xl:p-6 w-full border border-gray-400 rounded-md"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            :disabled="isSending"
            class="bg-rose-600 w-full rounded-full p-2 2xl:p-4 mt-4 text-white"
          >
            {{ isSending ? "Sending..." : "Submit" }}
          </button>

          <p v-if="successMessage" class="text-green-600 mt-2">
            {{ successMessage }}
          </p>
          <p v-if="errorMessage" class="text-red-600 mt-2">
            {{ errorMessage }}
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = reactive({
  fullName: "",
  email: "",
  message: "",
});

const isSending = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const sendContact = async () => {
  if (!form.fullName || !form.email || !form.message) {
    errorMessage.value = "Please fill in all required fields.";
    return;
  }

  isSending.value = true;
  errorMessage.value = "";
  successMessage.value = "";

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (data.success) {
      successMessage.value = "Message sent successfully!";
      form.fullName = "";
      form.email = "";
      form.message = "";

    } else {
      errorMessage.value = data.error || "Failed to send message.";
    }
  } catch (err) {
    console.error(err);
    errorMessage.value = "Failed to send message.";
  } finally {
    isSending.value = false;
  }
};
</script>

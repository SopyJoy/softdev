<template>
  <!-- Main Part Start-->
  <section
    class="px-6 py-10 md:py-16 min-h-screen flex flex-col justify-center w-full"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div
      class="flex flex-col md:flex-row items-start justify-start mb-8 md:mb-12"
    >
      <div class="md:w-2/3 mb-10">
        <h1
          class="text-3xl md:text-5xl font-bold leading-tight text-gray-900 text-left"
        >
          Building smarter solutions for smarter businesses
        </h1>
      </div>
      <div class="mt-4 md:mt-0 md:ml-auto">
        <button
          class="bg-[#6AD2FF] hover:bg-black text-black hover:text-white font-semibold py-2 px-6 rounded-md shadow-md transition md:my-12"
        >
          Get Started
        </button>
      </div>
    </div>
    <div class="relative flex space-x-6 mb-20 justify-start">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="[
          'relative group rounded-lg overflow-hidden shadow-md transition-transform duration-300',
          index % 2 === 0 ? 'top-0' : 'top-10',
          'w-full md:w-80 lg:w-96',
          'h-72 md:h-80 lg:h-96',
        ]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1"
        />
      </div>
    </div>
  </section>
  <!-- Main Part End-->

  <!-- Banner Start -->
  <section
    class="relative bg-[#6AD2FF] text-black py-16 px-6 flex items-center justify-center"
    data-aos="fade-left"
    data-aos-duration="1200"
  >
    <div
      class="relative w-full flex flex-col items-center justify-center space-y-8 sm:space-x-12 sm:flex-row"
    >
      <div class="flex-shrink-0 w-80 hidden sm:block">
        <img
          src="/designLeft.png"
          alt="Decorative Image"
          class="w-[50%] h-auto object-contain"
        />
      </div>
      <div class="w-full sm:w-1/2 text-center sm:text-left">
        <h1 class="text-4xl font-bold mb-4">A Top-Notch IT Company</h1>
        <p class="text-lg leading-relaxed">
          Designed To Deliver World Class Software Development Services.
          Provides World Class Services At A Fraction Of A Cost Without
          Sacrificing Quality.
        </p>
      </div>
    </div>
  </section>
  <!-- Banner End -->

  <!-- Development Team -->
  <section
    class="px-6 py-0 md:py-0"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div
      class="relative bg-cover bg-center bg-no-repeat sm:bg-contain"
      style="
        background-image: url('Net Background.png');
        padding-top: 50px;
        padding-bottom: 50px;
      "
    >
      <div class="flex justify-center mb-20">
        <h1 class="text-3xl md:text-5xl font-bold text-black text-center">
          Meet the Development Team
        </h1>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="(image, index) in devpics"
          :key="index"
          class="relative group rounded overflow-hidden shadow-md w-full h-80 bg-white transition-transform duration-300 flex flex-col items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-2/3 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-2"
          />
          <div class="w-full p-4 flex flex-col items-center text-center">
            <div class="flex justify-between items-center w-full">
              <div>
                <p class="text-sm text-gray-600">{{ image.occupation }}</p>
                <p class="text-lg font-semibold text-gray-800">
                  {{ image.name }}
                </p>
              </div>
              <div class="flex items-center ml-4">
                <NuxtLink
                  to="https://www.linkedin.com/in/your-linkedin-profile"
                  target="_blank"
                  class="flex items-center"
                >
                  <Icon
                    name="simple-icons:linkedin"
                    class="w-6 h-6 text-black hover:text-[#6AD2FF] cursor-pointer"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Development Team End -->

  <!-- Building Success Together Start -->
  <section
    class="relative text-black py-16 px-6 flex items-center justify-center"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div
      class="relative w-full flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12"
    >
      <div class="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
        <div class="md:text-left mb-10">
          <h2 class="text-5xl font-semibold text-gray-800">
            Let’s Build Your Success Together
          </h2>
        </div>
        <div class="relative overflow-hidden rounded-lg">
          <img
            src="/about-5.jpg"
            alt="Decorative Image"
            class="w-full h-[500px] object-cover rounded-lg shadow-md transition-transform duration-700 ease-in-out transform hover:scale-110 hover:translate-x-5"
          />
        </div>
      </div>
      <div class="w-full lg:w-1/2 lg:text-left mt-10 lg:mt-0">
        <div class="space-y-8">
          <div>
            <h1 class="text-2xl font-semibold">Consult with Our Experts</h1>
            <p
              class="text-base text-[#878787] leading-relaxed border-b-2 pb-4 mb-4 border-gray-300"
            >
              Get personalized outsourcing solutions to grow your business and
              reduce costs.
            </p>
          </div>
          <div>
            <h1 class="text-2xl font-semibold">
              Unlock Your Business Potential
            </h1>
            <p
              class="text-base text-[#878787] leading-relaxed border-b-2 pb-4 mb-4 border-gray-300"
            >
              Connect with us to leverage a skilled offshore team and boost your
              success.
            </p>
          </div>
          <div>
            <h1 class="text-2xl font-semibold">Smarter Outsourcing with Us</h1>
            <p
              class="text-base text-[#878787] leading-relaxed border-b-2 pb-4 mb-4 border-gray-300"
            >
              Explore cost-effective strategies with our expert business
              development team.
            </p>
          </div>
          <div>
            <h1 class="text-2xl font-semibold">Achieve Success with Us</h1>
            <p
              class="text-base text-[#878787] leading-relaxed border-b-2 pb-4 mb-4 border-gray-300"
            >
              Let our experts guide you to reach your business goals efficiently
              and affordably.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Building Success Together End -->
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  mounted() {
    AOS.init();
  },
  data() {
    return {
      images: [
        { src: "/about-1.jpg", alt: "Team Collaboration" },
        { src: "/about-2.jpg", alt: "Human Resource" },
        { src: "/about-3.jpg", alt: "Business Meeting" },
        { src: "/about-4.jpg", alt: "Team Presentation" },
      ],
      devpics: [
        {
          src: "practicedp.png",
          alt: "Developer 1",
          name: "John Doe",
          occupation: "Frontend Developer",
        },
        {
          src: "practicedp.png",
          alt: "Developer 2",
          name: "Jane Smith",
          occupation: "Backend Developer",
        },
        {
          src: "practicedp.png",
          alt: "Developer 3",
          name: "Samuel Lee",
          occupation: "Full-stack Developer",
        },
        {
          src: "practicedp.png",
          alt: "Developer 1",
          name: "John Doe",
          occupation: "Frontend Developer",
        },
        {
          src: "practicedp.png",
          alt: "Developer 2",
          name: "Jane Smith",
          occupation: "Backend Developer",
        },
        {
          src: "practicedp.png",
          alt: "Developer 3",
          name: "Samuel Lee",
          occupation: "Full-stack Developer",
        },
      ],
    };
  },
};
</script>

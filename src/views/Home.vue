<template>
  <main>
    <section class="home-intro flex justify-center flex-col p-5">
      <h1 class="text-4xl font-bold text-white mb-4 sm:text-5xl lg:ml-20 lg:inline-block 3xl:text-6xl">Lorum Ipsum Dulce</h1>
      <hr class="title-separator ml-8 mb-4 white-hr lg:ml-28" />
      <p class="text-1xl text-white ml-8 sm:text-lg md:max-w-xl lg:ml-28 3xl:text-xl">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
    </section>
    <section class="home-content p-5 flex flex-col items-center mt-8">
      <div class="relative w-full flex flex-col items-center md:mb-10 lg:mb-20 lg:max-w-5xl 2xl:max-w-6xl 2xl:mb-36 3xl:max-w-7xl">
        <div class="content-wrapper bg-blue relative rounded-md shadow-md p-5 relative sm:max-w-lg md:max-w-xl md:self-start lg:left-10 2xl:max-w-3xl 3xl:p-10 3xl:max-w-5xl">
          <h2 class="text-3xl font-bold text-light-black mb-4 3xl:text-4xl">About Us</h2>
          <hr class="title-separator ml-6 mb-4" />
          <p class="text-white ml-6 md:w-9/12 xl:w-10/12 2xl:w-9/12 3xl:text-lg 3xl:w-11/12">
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <img class="rounded-md shadow-md mt-4 sm:max-w-lg md:max-w-sm md:absolute md:-bottom-10 md:-right-0 lg:-bottom-20 lg:right-10 2xl:max-w-md 2xl:-bottom-36 3xl:-bottom-24" src="@/assets/placeholder-3.jpg" alt="" />
      </div>
      <div class="relative w-full flex flex-col items-center md:mb-10 lg:mb-20 lg:max-w-5xl 2xl:max-w-6xl 2xl:mb-18 3xl:max-w-7xl">
        <div class="content-wrapper bg-orange rounded-md shadow-md p-5 relative mt-10 sm:max-w-lg md:max-w-xl md:self-end md:pl-24 lg:right-10 2xl:max-w-3xl 3xl:p-10 3xl:max-w-5xl">
          <h2 class="text-3xl font-bold text-light-black mb-4 2xl:ml-6 3xl:text-4xl">Enquire One to One</h2>
          <hr class="title-separator ml-6 mb-4 2xl:ml-12" />
          <p class="text-white ml-6 2xl:w-10/12 2xl:ml-12 3xl:text-lg 3xl:w-11/12">
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <router-link class="blue-button bg-blue text-white rounded-full px-3 py-1 ml-6 mt-2 inline-block font-semibold transition-all 2xl:ml-12 3xl:text-lg" to="/enquire-one-to-one">Learn More</router-link>
        </div>
        <img class="rounded-md shadow-md mt-4 sm:max-w-lg md:max-w-sm md:absolute md:-bottom-10 md:-left-0 lg:-bottom-20 lg:left-10 2xl:max-w-md 2xl:-bottom-18 2xl:left-0 3xl:-bottom-10" src="@/assets/placeholder-5.jpg" alt="" />
      </div>
      <div class="relative w-full flex flex-col items-center md:mb-10 lg:mb-20 lg:max-w-5xl 2xl:max-w-6xl 2xl:mb-44 3xl:max-w-7xl 3xl:mb-20">
        <div class="content-wrapper bg-blue rounded-md shadow-md p-5 relative mt-10 sm:max-w-lg md:max-w-xl md:self-start lg:left-10 2xl:max-w-3xl 3xl:p-10 3xl:max-w-5xl">
          <h2 class="text-3xl font-bold text-light-black mb-4 3xl:text-4xl">Book Sessions</h2>
          <hr class="title-separator ml-6 mb-4" />
          <p class="text-white ml-6 md:w-9/12 xl:w-10/12 2xl:w-9/12 3xl:text-lg 3xl:w-10/12">
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <router-link class="orange-button bg-orange text-white rounded-full px-3 py-1 ml-6 mt-2 inline-block font-semibold transition-all 3xl:text-lg" to="/book-sessions">Learn More</router-link>
        </div>
        <img class="rounded-md shadow-md mt-4 sm:max-w-lg md:max-w-sm md:absolute md:-bottom-10 md:-right-0 lg:-bottom-20 lg:right-10 2xl:max-w-md 2xl:-bottom-20 3xl:-bottom-10" src="@/assets/placeholder-6.jpg" alt="" />
      </div>
    </section>
    <section class="home-testimonials p-5 flex flex-col items-center xl:flex-row xl:flex-wrap xl:justify-center">
      <h2 class="text-3xl text-dark-blue text-center font-bold mb-4 w-full">Testimonials</h2>
      <div class="bg-orange flex flex-col p-5 rounded-md shadow-md mb-4 md:max-w-2xl xl:w-5/12 xl:mx-4 xl:mb-8">
        <h3 class="text-2xl text-dark-blue font-semibold">David Marsh</h3>
        <p class="text-white pl-6">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae."
        </p>
      </div>
      <div class="bg-orange flex flex-col p-5 rounded-md shadow-md mb-4 md:max-w-2xl xl:w-5/12 xl:mx-4 xl:mb-8">
        <h3 class="text-2xl text-dark-blue font-semibold">Randy Tent</h3>
        <p class="text-white pl-6">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae."
        </p>
      </div>
      <div class="bg-orange flex flex-col p-5 rounded-md shadow-md mb-4 md:max-w-2xl xl:w-5/12 xl:mx-4 xl:mb-8">
        <h3 class="text-2xl text-dark-blue font-semibold">Mary Davis</h3>
        <p class="text-white pl-6">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae."
        </p>
      </div>
      <div class="bg-orange flex flex-col p-5 rounded-md shadow-md mb-4 md:max-w-2xl xl:w-5/12 xl:mx-4 xl:mb-8">
        <h3 class="text-2xl text-dark-blue font-semibold">William Speareshake</h3>
        <p class="text-white pl-6">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae."
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
  .home-intro {
    background: url('../assets/placeholder-1.jpg') center no-repeat;
    height: 100vh;
  }
  .title-separator {
    width: 90px;
    border: none;
    height: 2px;
    color: #333; /* old IE */
    background-color: #333; /* Modern Browsers */
  }
  .blue-button:hover {
    background-color: #023059
  }
  .orange-button:hover {
    background-color: #FF7F2A
  }
  .home-content img {
    object-fit: cover;
  }

  @media(min-width: 768px) {
    .content-wrapper {
      width: 60%;
    }
    .content-wrapper p {
      /* width: 79%; */
    }
  }

  @media(min-width: 1024px) {
    .home-content img {
      max-width: 425px;
      max-height: 275px;
    }
  }
  @media(min-width: 1536px) {
    .home-content img {
      max-width: 525px;
      max-height: 325px;
    }
    .content-wrapper p {
      /* width: 85%; */
    }
  }
</style>

<script>
export default {
  name: 'Home'
}
</script>

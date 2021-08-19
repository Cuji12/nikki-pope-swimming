<template>
  <main class="">
    <div class="menu hidden bg-dark-blue h-screen w-screen z-50 fixed" id="menu">
      <img class="absolute top-0 w-full" src="@/assets/waves/menu-wave.svg" alt="Orange wave for menu" />
      <div class="menu__exit" id="exit-menu" @click="closeMenu"></div>
      <ul class="text-white flex flex-col h-screen justify-center px-10">
        <li class="mb-10 text-2xl font-bold transition-all hover-orange" @click="closeMenu">
          <router-link to="/">Home</router-link> 
        </li>
        <li class="mb-10 text-2xl font-bold transition-all hover-orange" @click="closeMenu">
          <router-link to="/enquire-one-to-one">Enquire One to One</router-link>
        </li>
        <li class="mb-10 text-2xl font-bold transition-all hover-orange" @click="closeMenu">
          <router-link to="/book-sessions">Book Sessions</router-link> 
        </li>
      </ul>
    </div>
    <header class="fixed flex justify-between items-center py-4 px-10 w-full z-40">
      <img class="h-28" src="@/assets/iMfarming.png" alt="" />
      <div class="md:hidden flex flex-col w-1/12 cursor-pointer burger-menu" id="burger" @click="openMenu">
        <hr class="mb-2">
        <hr class="mb-2">
        <hr class="">
      </div>
      <!-- Add non-mobile nav -->
      <nav id="nav" class="flex items-center justify-between pl-10 text-white font-bold hidden md:block">
        <router-link class="hover-orange transition-all mx-4 3xl:text-lg" to="/">Home</router-link> 
        <router-link class="hover-orange transition-all mx-4 3xl:text-lg" to="/enquire-one-to-one">Enquire One to One</router-link>
        <router-link class="hover-orange transition-all ml-4 3xl:text-lg" to="/book-sessions">Book Sessions</router-link> 
      </nav>
    </header>
    <router-view/>
    <footer class="h-48 p-5 text-white flex flex-col items-center justify-end">
      <router-link class="underline" to="/terms-and-conditions">Terms and Conditions</router-link>
      <p>Email:
        <a class="underline" href="mailto:nikkipope@gmail.com">nikkipope@gmail.com</a>
      </p>
      <p>Tel:
        <a class="underline" href="tel:nikkipope@gmail.com">0161 233 232</a>
      </p>
      <ul class="socials flex mt-2">
        <li class="mr-2">
          <a href="">
            <img class="w-6 h-6" src="@/assets/socials/youtube_logo.png" alt="Youtube Logo" />
          </a>
        </li>
        <li class="mr-2">
          <a href="">
            <img class="w-6 h-6" src="@/assets/socials/instagram_logo.png" alt="Instagram" />
          </a>
        </li>
        <li class="mr-2">
          <a href="">
            <img class="w-6 h-6" src="@/assets/socials/linkedin_logo.png" alt="LinkedIn Logo" />
          </a>
        </li>
        <li class="mr-2">
          <a href="">
            <img class="w-6 h-6" src="@/assets/socials/twitter_logo.png" alt="Twitter Logo" />
          </a>
        </li>
        <li class="mr-2">
          <a href="">
            <img class="w-6 h-6" src="@/assets/socials/facebook_logo.png" alt="Facebook Logo" />
          </a>
        </li>
      </ul>
    </footer>
  </main>
</template>

<script>
export default {
  methods: {
    openMenu() {
      document.getElementById('body').setAttribute('style', 'height: 100%; overflow: hidden;');
      document.getElementById('menu').setAttribute('style', 'display: block;');
    },
    closeMenu() {
      document.getElementById('body').setAttribute('style', 'height: unset; overflow: unset;');
      document.getElementById('menu').setAttribute('style', 'display: none;');
    },
  },
}
</script>

<style>
main {
  background: url('./assets/waves/site-bg-wave.svg') no-repeat;
  background-size: cover;
}
  .burger-menu hr {
    border-width: 1px;
    border-radius: 2px;
    width: 30px;
  }
  .menu__exit {
      position: absolute;
      top: 20px;
      right: 35px;
      color: white;
      font-size: 58px;
      cursor: pointer;
  }
  .menu__exit:after {
    display: inline-block;
    content: "\00d7";
  }
  footer {
    background: url('./assets/waves/footer-wave.svg') center no-repeat;
    background-size: cover;
  }
</style>
<template>
  <header>
    <div>
      <nav class="last:pb-2 md:last:pb-0 bg-cyan-600 text-center md:flex-wrap shadow md:flex md:items-center md:justify-between">
        <div class="mb-2 md:mb-0">
              <router-link to="/" class="cursor-pointer">
            <img
              class="h-10 inline ml-4 mr-4"
              src="./assets/images/logoJojo.png"
              alt="mon logo"
            />
          </router-link>
        </div>
        <ul class="md:flex md:items-center" v-for="(item, index) in itemMenus" :key="index">
          <RouterLink :to="item.path" class="text-xl text-white font-semibold target:shadow-lg">
            <li class="p-6 cursor-pointer hover:bg-[#ED69BD] font-nav duration-500 md:rounded-none rounded-[16px] mx-4">
              {{ item.title }}
            </li>
          </RouterLink>
        </ul>
      </nav>
    </div>
    </header>
    <div class="flex justify-end items-center mr-8 pt-8 pb-4 md:pb-0">
      <button @click="toggleMode" class="themeLogo">
        <span  v-if="mode" style="border-radius:50%; padding: 10px 14px 10px 14px;" class="font-bold  bg-black text-white">
          <font-awesome-icon :icon="['fas', 'sun']"/></span> 
        <span  v-else style="border-radius:50%; padding: 10px 14px 10px 14px;" class="bg-white text-black">
          <font-awesome-icon  :icon="['fas', 'moon']" /></span>
      </button>
    </div>
  <main>
    <RouterView />
    <div class="flex justify-end pb-4" @click="scrollUp">
      <font-awesome-icon :icon="['fas', 'arrow-up']" class="hover:cursor-pointer scrollUp duration-500 border-2 hover:scale-75 bg-[#3E869D] border-black mr-4 ml-6 w-4 p-2 rounded-full"/>
    </div>
  </main>
    <Footer/>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  components: {
    Footer
  },
  data() {
    return {
      mode:true,
      itemMenus: [
        {
          title: "Home",
          path: "/",
          icons: "mdi-home",
        },
        {
          title: "Mes projets",
          path: "/myprojects",
          icons: "mdi-face",
        },
        {
          title: "Mon CV",
          path: "/moncv",
          icons: "mdi-account-school",
        },
        {
          title: "Contact",
          path: "/contact",
          icons: "mdi-contacts",
        },
      ],
    }
  },
  methods:{
    toggleMode(){
        this.mode = !this.mode
        const body = document.querySelector('body')
      if (this.mode == false) {
          body.classList.add('bodyChange');
        } 
      else {
          body.classList.remove('bodyChange');
      }
    },
    scrollUp() {
      window.scrollTo({
        top:0,
        //remonter doux
        behavior: 'smooth' 
      })
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Pacifico&display=swap');
@import url('./assets/css/nightMode.css');
@import url('./assets/css/reset.css');
</style>

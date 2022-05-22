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
        <ul
          class="md:flex md:items-center"
          v-for="(item, index) in itemMenus"
          :key="index"
        >
          <li class="p-6 hover:bg-[#ED69BD] md:rounded-none rounded-[16px] mx-4">
            <RouterLink
              :to="item.path"
              class="text-xl text-white target:shadow-lg"
              >{{ item.title }}</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
    </header>
    <div class="flex justify-end items-center mr-8 pt-4 pb-4 md:pb-0">
      <button @click="toggleMode" class="themeLogo">
        <span  v-if="mode" style="border-radius:50%; padding: 10px 14px 10px 14px;" class="font-bold  bg-black text-white">
          <font-awesome-icon :icon="['fas', 'sun']"/></span> 
        <span  v-else style="border-radius:50%; padding: 10px 14px 10px 14px;" class="bg-white text-black">
          <font-awesome-icon  :icon="['fas', 'moon']" /></span>
      </button>
    </div>
  <main>
    <RouterView />
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
          title: "Mes projects",
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
    }
  }
};
</script>

<style>
@import url('./assets/css/nightMode.css');
@import url('./assets/css/reset.css');
</style>

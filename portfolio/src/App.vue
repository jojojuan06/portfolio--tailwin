<template>
  <header>
    <div>
      <nav class=" bg-cyan-600 shadow md:flex md:items-center md:justify-between">
        <div>
          <span class="cursor-pointer">
            <img
              class="h-10 inline ml-4 mr-4"
              src="./assets/images/logoJojo.png"
              alt="mon logo"
            />
          </span>
        </div>
        <ul
          class="md:flex md:items-center"
          v-for="(item, index) in itemMenus"
          :key="index"
        >
          <li class="p-6 hover:bg-[#ED69BD]">
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
    <div class="flex justify-end items-center mr-8 pt-4">
      <button @click="toggleMode" class="themeLogo">
        <span  v-if="mode" style="border-radius:50%; padding: 10px 14px 10px 14px;" class="font-bold  bg-black text-white">
          <font-awesome-icon :icon="['fas', 'sun']"/></span> 
        <span  v-else style="border-radius:50%; padding: 10px 14px 10px 14px;" class="bg-white text-black">
          <font-awesome-icon :class="toggleClass" :icon="['fas', 'moon']" /></span>
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
      toggleClass: 'bodyChange',
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
    }
  }
};
</script>

<style>
@import url('./assets/css/reset.css');
</style>

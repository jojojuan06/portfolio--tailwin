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
      <button class="rounded-full h-8 w-8 text-white  bg-black themeLogo">&#9789;</button>
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
    };
  },
};
</script>

<style>
@import url('./assets/css/reset.css');
</style>

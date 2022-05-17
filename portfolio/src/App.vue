<template>
  <header>
    <div>
      <nav class="p-5 bg-cyan-600 shadow md:flex md:items-center md:justify-between">
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
          <li class="mx-4">
            <RouterLink
              :to="item.path"
              class="text-xl text-white focus:bg-gradient-to-r focus:p-6 from-pink-900 via-pink-500 to-orange-800"
              >{{ item.title }}</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
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

<style></style>

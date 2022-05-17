<template>
  <div>
    <!-- Card -->
    <div style="max-width: 300px;max-height: 350px;height:350px" class="relative w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <!-- Image -->
      <div class="flex justify-between">
          <div class="flex font-bold">
            <h2 class="mr-1">Project:</h2>
            <h2 style="color:#ED69BD;">{{cardData.projectnumber}}</h2>
          </div>
          <div class="flex">
            <img  class="h-12 w-12  hover:cursor-zoom-in object-cover rounded-xl" :src="cardData.image" :alt="project"/>
          </div>
      </div>
      <div>
        <div class="p-2">
        <!-- Heading -->
        <h2 class="font-bold" style="font-size:16px;">{{cardData.name}}</h2>
        <!-- Description -->
        <p class="overflow-auto text-sm text-gray-600">
          {{cardData.descriptions}}
        </p>
        <p>
          {{cardData.duration}}
        </p>
        </div>
        <div>
        </div>
      </div>
    </div>
      <div class="flex relative bottom-12 items-center justify-center">
        <a role="button" href="#" class="text-white bg-sky-500 px-3 py-1 rounded-md hover:bg-purple-700">
        Learn More
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props:['cardData'],
  data() {
    return {
      
    }
  },
};
</script>

<style scoped>
img {
  position: relative;
  transition: 500ms;
  transform-origin: right top 50px;
}
img:hover {
transform: scale(4);
}
</style>

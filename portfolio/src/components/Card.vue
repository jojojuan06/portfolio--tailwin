<template>
  <div>
    <!-- Card -->
    <div style="max-width: 300px;" class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <!-- Image -->
      <img class="h-40   object-cover rounded-xl" :src="cardData.image" alt="projects"/>
      <div class="p-2">
        <!-- Heading -->
        <h2 class="font-bold text-lg mb-2">{{cardData.title}}</h2>
        <!-- Description -->
        <p class="text-sm text-gray-600">
          {{cardData.descriptions}}
        </p>
        <p>
          {{cardData.duration}}
        </p>
      </div>
      <!-- CTA  -->
      <div class="m-2">
        <a role="button" href="#" class="text-white bg-sky-500 px-3 py-1 rounded-md hover:bg-purple-700">
          Learn More
          </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props:['cardData']
};
</script>

<style></style>

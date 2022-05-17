<!--App.vue-->
<template>
    <div class="h-screen  bg-gray-500 bg-cover">
      <CardList/>
    </div>
 </template>

<script>
import CardList from '../components/CardList.vue'

export default {
  name: 'App',
  components: {
    CardList,
  }
}
</script>
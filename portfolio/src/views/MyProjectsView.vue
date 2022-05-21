<!--App.vue-->
<template>
    <div class="card--night bg-cover flex justify-center items-center">
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
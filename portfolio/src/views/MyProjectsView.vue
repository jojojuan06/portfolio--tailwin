<!--App.vue-->
<template>
  <div class="bg-gray-500">
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
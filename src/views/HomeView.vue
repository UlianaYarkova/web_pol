<template>
  <div class="home mb-10">
    <v-img
      src="https://img3.akspic.ru/previews/6/5/1/6/5/156156/156156-sostav-krasota-salon_krasoty-vizazhist-volosy-x750.jpg"
      max-height="580" cover></v-img>
    <div class='d-flex justify-content-center list'>
      <componentList :cards="cards" />
    </div>
  </div>
</template>

<script>
import componentList from '@/components/componentList.vue';

export default {
  name: 'HomeView',
  components: {
    componentList,
  },
  computed: {
    cards() {
      return this.$store.getters.services;
    },
  },
}
</script>

<style>
.list {
  flex-wrap: wrap;
}
.list__card {
  min-width: 40%;

  max-width: 1000px;
}
.list__card:hover {
  cursor: pointer;
  background-color: rgb(216, 216, 216);
}
</style>
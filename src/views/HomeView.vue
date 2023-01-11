<template>
  <div class="home mb-10">
    <v-img
      src="https://img3.akspic.ru/previews/6/5/1/6/5/156156/156156-sostav-krasota-salon_krasoty-vizazhist-volosy-x750.jpg"
      max-height="580" cover></v-img>
    <v-container>
      <v-select label="Сортировка"
         v-model="sort"
        :items="sortItems"></v-select></v-container>
    <div class='d-flex justify-content-center list'>
      <componentList :cards="cards" :sort="sort" />
    </div>
  </div>
</template>

<script>
import componentList from '@/components/componentList.vue';

export default {
  data() {
    return {
      sort:"default"
    }
  },
  name: 'HomeView',
  components: {
    componentList,
  },
  computed: {
    sortItems() {
      return [{ title: "По умолчанию", value: "default" }, { title: "По возрастанию", value: "max" }, { title: "По убыванию", value: "min" }]
    },
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
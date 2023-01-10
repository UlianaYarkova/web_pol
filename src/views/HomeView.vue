<template>
  <div class="home">
    <v-img
      src="https://img3.akspic.ru/previews/6/5/1/6/5/156156/156156-sostav-krasota-salon_krasoty-vizazhist-volosy-x750.jpg"
      max-height="580" cover></v-img>
    <v-card class="mx-auto" max-width="640" max-height="400" variant="outlined">
      <v-card-item v-for="card in $store.getters.services">
        <div>
          <div class="text-overline mb-1">
            OVERLINE
          </div>
          <div class="text-h6 mb-1">
            Headline
          </div>
          <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
        </div>
      </v-card-item>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',

}
</script>

<style>

</style>
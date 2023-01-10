<template>
  <div class="about">
    <v-img
      src="https://damion.club/uploads/posts/2022-09/thumbs/1663247188_2-damion-club-p-manikyur-risunok-na-chernom-fone-krasivie-2.jpg"
      height="100vh" cover>
    </v-img>
    <v-card
      class="mx-auto card"
      max-width="600"
      outlined
    >
      <v-list-item three-line>
        <div>
          <div class="text-overline mb-3">
            {{ card.subtitle }}
          </div>
          <v-list-item-title class="text-h5 mb-3">
            {{ card.title}}
          </v-list-item-title>
          <v-list-item-subtitle class='mb-3'>
            {{ card.description }}
          </v-list-item-subtitle>
        </div>

        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        ></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn
          class="button"
          rounded
          color="accent"
        >
        Записаться на услугу
        </v-btn>
      </v-card-actions>
    </v-card>
    <h1 class="visually-hidden">About our services</h1>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    card() {
      return this.$store.getters.getAboutDataById(this.id)
    },
  },

}
</script>

<style>
.about {
  position: relative;
}
.card {
  top: 100px;
  right: 100px;
  position: absolute;
}
.button {
  background-color: lightgreen;
  font-weight: bold;
}
.visually-hidden {
  display: none;
}
</style>
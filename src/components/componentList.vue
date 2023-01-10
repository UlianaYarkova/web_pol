<template>
    <v-card class="mx-auto mt-5 list__card" max-width="640" max-height="400" variant="outlined" v-for="card in cards" v-bind:key="card.id">
        <v-card-item>
            <div @click='goNext(card.id)'>
            <div class="text-overline mb-1">
                {{ card.title }}
            </div>
            <div class="text-h6 mb-1">
                {{ card.subtitle }}
            </div>
            <div class="text-caption">
                {{ card.description }}
            </div>
            </div>
        </v-card-item>
    </v-card>
</template>

<script>
export default {
    name: "componentList",
    methods: {
        goNext(id) {
            this.$router.push("/about/"+ id)
        }
    },
    props: ["cards"],
}
</script>
<template>
    <v-card class="mx-auto mt-5 list__card" max-width="640" max-height="400" variant="outlined"
        v-for="card in sortingCards" v-bind:key="card.id">
        <v-card-item>
            <div @click='goNext(card.id)'>
                <div class="text-overline mb-1">
                    {{ card.title }}
                </div>
                <div class="text-h6 mb-1">
                    {{ card.subtitle }}
                </div>
                <div class="text-h6 mb-1">
                    {{ card.price }} $
                </div>
                <div class="text-caption">
                    {{ card.description }}
                </div>
                <div class="text-center">
                    <v-rating v-model="rating" bg-color="orange-lighten-1" color="black"></v-rating>
                </div>
            </div>
        </v-card-item>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            value: this.cards
        }
    },
    computed: {
        sortingCards() {
            const wrapCards = this.cards
            if (this.sort !== 'default') {
                return wrapCards.sort((a, b) => {
                    if (this.sort === 'max') {
                        return a.price - b.price
                    }
                    else {
                        return b.price - a.price
                    }
                })
            }

            return wrapCards
        }
    },
    name: "componentList",
    methods: {
        goNext(id) {
            this.$router.push("/about/" + id)
        }
    },
    props: ["cards", "sort"],
}
</script>
<template>
  <CardComponent :heading-number="index" title="Bangabandhu" />
</template>

<script>
  import CardComponent from "./components/Card.vue"

  // component
  export default {
    components: {
      CardComponent,
    },
    methods: {
      randStr() {
        const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const rand = Math.floor(Math.random() * str.length)
        return str.slice(0, rand)
      },
    },
  }
</script>

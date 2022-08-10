<template>
  <div style="border: 4px solid black; width: 100px">
    <h1>{{ title }} - {{ headingNumber }}</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, ut?</p>
    <Rakib target="_blank" link="https://www.google.com/" />
  </div>
</template>

<script>
  import Rakib from "./Rakib.vue"

  export default {
    components: {
      Rakib,
    },
    props: {
      headingNumber: Number,
      title: String,
    },
  }
</script>

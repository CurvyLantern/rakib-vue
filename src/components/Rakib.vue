<template>
  <a :href="link">go to google</a>
</template>

<script>
  export default {
    props: {
      link: String,
    },
  }
</script>

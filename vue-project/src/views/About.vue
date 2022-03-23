<script >
export default {
    props: [],
    data() {
        return {
            name: "Enter Name",
            age: 0,
            personList: [],
            loadingDelete: false
        };
    },
    methods: {
    },
}
</script>

<template>
<div>
  <h1>Contact Info</h1>
  <h3>Made By: Nicholas Masciandaro</h3>
  <h3>nmash1937@icloud.com</h3>
</div>

</template>

<style scoped>
  .PersonList {
    padding: 0.5em;
  }
</style>
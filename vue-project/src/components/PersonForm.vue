<script >
export default {
  props: [],
  emits: {
      onClick: ({name, age}) => {
          if(name == '' || age == 0) return false;
          return true;
      }
  },
  data() {
    return {
      name: "",
      age: 0,
    }
  },
  methods: {


  },

}
</script>

<template>
    <!--input v-bind="name"/-->
    <div>
        <b-input-group class='input-group' size="md" prepend="Name">
            <b-form-input v-model="name"></b-form-input>
        </b-input-group>
        <b-input-group  class='input-group' size="md" prepend="Age" >
            <b-form-input v-model="age" ></b-form-input>
        </b-input-group>

        <b-button v-on:click="$emit('onClick', name, age)">Submit Person</b-button>
    </div>

</template>

<style scoped>
    div {
        padding: 1em;
        border-radius: 0.25em;
    }
    .input-group {
        width: 400px !important;
    }
</style>

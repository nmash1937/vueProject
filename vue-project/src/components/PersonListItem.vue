<script >
export default {
    props: [
        'person'
    ],
    emits: ['deletePerson'],
    data() {
        return {
            name: "Enter Name",
            age: 0,
            personList: [],
            loadingDelete: false
        };
    },
    methods: {

        getPeople() {
            fetch("https://localhost:7105/People").then(res => res.json()).then(data => {
                this.personList = data;
            });
        },
    },
}
</script>

<template>
    <span class="item">
        <b-button size='sm' v-on:click="$emit('deletePerson', person)" variant="danger" style="max-height: 100%">X</b-button>
        Name: {{person.name}} age: {{person.age}}
    </span>
</template>

<style scoped>
    .item {
        margin: 0.5em
    }
</style>
<script >
import PersonForm from './../components/PersonForm.vue'
import PersonListItem from './../components/PersonListItem.vue'

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
        getPeople() {
            fetch("https://localhost:7105/People").then(res => res.json()).then(data => {
                this.personList = data;
            });
        },

        deletePerson(person) {
            this.loadingDelete = true;
            const requestOptions = {
                method: "DELETE"
            };
            fetch("https://localhost:7105/People/" + person.id, requestOptions).then(res => {
                this.getPeople();
                this.loadingDelete = false;
            });
        },

        onClick(name, age) {

          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: name, age: age})
          };

          fetch("https://localhost:7105/People", requestOptions).then(() => {
            this.getPeople();
          }).catch(err => {
            console.log("Error")
            console.log(err)
          })
        }
    },
    mounted() {
        console.log("MPOU");
        this.getPeople();
    },
    components: { PersonForm, PersonListItem }
}
</script>

<template>
    <!--input v-bind="name"/-->
    <div>
      <h1>Person Forms</h1>
      <PersonForm @on-click="(name, age) => onClick(name, age)"/>
      <br>

      <h2>List of people:</h2>

        <div class="PersonList" v-for="person in personList" v-bind:key="person.id">
          <span>
            <PersonListItem @delete-person="(person) => deletePerson(person)" :person="person"/>
          </span>

        </div>
    </div>

</template>

<style scoped>
  .PersonList {
    padding: 0.5em;
  }
</style>
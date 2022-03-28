<template>
<div >
    <div class="router-container">
        <b-link  v-bind:to="'/'" router-tag="b-button">Home</b-link>
        <b-link  v-bind:to="'/about'" router-tag="b-button">About</b-link>
    </div>
<router-view></router-view>
</div>

</template>

<style scoped>

.btn.btn-secondary {
    margin: 0.5em
}
.router-container {
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    margin-top: 1em;
}
a:hover {
    color: white;
}
 a {
     padding: 0.5em;
     margin: 0.5em;
     min-width: 100px;
     background-color:rgb(0, 153, 255);
     color: white;
     border-radius: .5em;
 }
</style>
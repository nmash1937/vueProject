<template>
<div >
    <div class="router-container">
            <router-link to='/'>Home</router-link>
            <router-link to='/about'>About</router-link>
    </div>


    <router-view></router-view>
</div>

</template>

<style scoped>

.router-container {
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    margin-top: 1em;
}
 a {
     padding: 0.5em;
     margin: 0.5em;
     min-width: 100px;
     background-color:aqua;
     border-radius: .5em;
 }
</style>
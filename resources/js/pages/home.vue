<template>
    <p>page : {{home}}</p>
</template>


<script setup>
    import {ref} from "vue";
    const home = ref("home");
</script>
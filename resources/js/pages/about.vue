<template>
    <p>page : {{about}}</p>
</template>


<script setup>
    import {ref} from "vue";
    const about = ref("about");
</script>
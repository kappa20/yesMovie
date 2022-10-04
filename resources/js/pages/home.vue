<template>
    <Navbar :genres="data" />
    <Footer :genres="data"></Footer>
</template>


<script setup>
    import Navbar from "../components/navbar.vue"
    import Footer from "../components/footer.vue";
    import data from '../data/data.json';
</script>
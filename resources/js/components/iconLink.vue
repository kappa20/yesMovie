<template>
<a class="w-[30px] rounded-sm h-[30px] inline-block" :href="link ? link : 'noLink'">
    <img :src="'/images/'+image" class="w-full h-full rounded-sm" :alt="title" >
</a>
</template>

<script setup>
    const props = defineProps(['image',"title",'link'])

</script>
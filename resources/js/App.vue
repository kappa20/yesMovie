<script>
    export default{
        data(){
            return {
                count: 0
            }
        }
    }
</script>

<template>
    <button class="bg-red-300" @click="count++">Count is: {{ count }}</button>
    <p class="text-green-400">hello</p>
</template>
<template>
        <div class="border-b border-gray-300/10 bg-[#222222] text-[#C91C55] pt-3 px-5 hover:text-white 
        "
            v-for="(type) in test" :key="type.id"
           
            >
                    <p  
                        class="cursor-pointer font-semibold 
                        hover:text-white select-none pb-3 "
                        
                        
                            >
                            {{type.title}}
                    </p>  
                    <div class="grid grid-cols-3 gap-x-5  md:grid-cols-4 text-sm lg:hidden"
                        >
                        <p v-for="(item,i) in type.items" :key="i" 
                            class="bg-[#282828] cursor-pointer 
                                p-1 pl-3 hover:bg-[#C91C55] mb-3"
                                >
                            <a  href="/#" class="text-gray-300">{{item}}</a>
                        </p>
                    
                    </div>
        </div>
</template>
<script setup>
    import {ref} from "vue";
    const props = defineProps(['test','modelValue'])
    const activeTitle = ref(true)
   
</script>

<style scoped>
.active > p {
    color:white
}
.inactive > p {
     color:#C91C55
}
</style>
<template>
    <Transition name="fade">

        <div id="mobile-search" v-show="modelValue" 
                class="absolute top-[50px] md:top-[60px] drop-shadow-md h-[54px] left-0 w-screen bg-[#232323] py-[3px] px-2  flex flex-row items-center">
            
                <div class="relative w-full">

                    <input type="text" class="w-full text-[#555555]
                    focus:text-gray-200 outline-none text-sm bg-[#555555] py-[6px]
                    px-2 rounded-sm " placeholder="Searching..." />

                    <div id="search" class="w-[20px] h-[20px] text-gray-300 active:text-gray-100  
                    absolute top-[6px] right-2">
                        <Svgs name="search" color="currentColor" />
                    </div>

                </div>
            
        </div>

    </Transition>
</template>

<script setup>
    defineProps(['modelValue'])
    
</script>
<template>
    <nav class="bg-[#323232] w-screen flex flex-row items-center justify-between p-3" style="height:50px;">

        <div class="flex flex-row gap-4 items-center">
            <div class="py-[4px] pb-[6px] px-[5px] rounded-sm" @click="isMenuActive = !isMenuActive;isSearchActive=false" :class="{ active : isMenuActive}">
                <div id="menu" class="w-[20px] h-[20px] ">
                    <Svgs name="menu" color="white" />
                </div>
            </div>
           
            <div id="logo">
                <img class="h-[25px]" src="/images/logo-m.png" alt="Logo">
            </div>
        </div>
        

        <div class="flex flex-row gap-2 items-center">
            <div class="py-[4px] pb-[6px] px-[5px] rounded-sm" @click="isSearchActive = !isSearchActive;isMenuActive = false" :class="{ active : isSearchActive}">
                <div id="search" class="w-5 h-5">
                    <Svgs name="search" color="white" />
                </div>
            </div>
            
            <div>
                <a class="border border-[#555] px-3 py-1 rounded-sm text-[#CACACA] uppercase" style="font-size:14px;">Login</a>
            </div>
        </div>

        <div id="mobile-search" v-show="isSearchActive" 
        class="absolute top-[50px] drop-shadow-md h-[54px] left-0 w-screen bg-[#232323] py-[3px] px-2  flex flex-row items-center">
            <div class="relative w-full">
                <input type="text" class="w-full text-[#555555] focus:text-gray-200 outline-none text-sm bg-[#555555] py-[6px] px-2 rounded-sm " placeholder="Searching..." />
                <div id="search" class="w-[20px] h-[20px] text-gray-300 active:text-gray-100  absolute top-[6px] right-2">
                    <Svgs name="search" color="currentColor" />
                </div>
          
            </div>
                
            
        </div>
        
        <div id="menu" v-show="isMenuActive" class="absolute top-[50px] bg-[#222222] left-0 w-screen">
                <ul class="w-screen drop-shadow-md">
                    <li v-for="(genre,id) in genres" :key="id">
                        <a href="#" class="text-[#C91C55] inline-block text-[14px] pl-2 py-2 font-semibold" >{{genre[0]}}</a>
                        <ul  class="grid grid-cols-3">
                            <tempalte v-for="(sous_genre,idd) in genre[1]" :key="idd">
                                <li >
                                    <a href="#" class="text-[#CCCCCC] text-xs pl-2">{{sous_genre}}</a>
                                </li>
                            </tempalte>
                            <div class="border-b-[1px] w-screen border-gray-50/10 "></div>
                        </ul>
                    </li>
                    
                </ul>
        </div>
        
    </nav>
    
</template>


<script setup>
    import Svgs from "./svgs.vue";
    import {ref} from "vue";
    const isMenuActive = ref(false)
    const isSearchActive = ref(false)
    const genres = ref([
        ["Home",[]],
        ["Genre",["Action","Adventure","Animation","Biography","Comdey","Costume","Crime","Documentary","Drama",
    "Family","Fantasy","History"]],
    ["Country",["Asia","China","Euro","France","HongKong","India","Interantional","Japan","Korea"]],
    ["Movies",[]],
    ["Tv-Series",[]],
    ["Top IMDB",[]]
])
</script>

<style scoped>
    
    .active{
        background-color: #666666;
    }
</style>

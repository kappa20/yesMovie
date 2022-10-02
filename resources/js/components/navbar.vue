<template>
    <nav class="bg-[#323232] h-[50px] md:h-[60px] shadow-md lg:h-[70px] w-screen flex flex-row items-center justify-between" 
                                                                                         >
        <!-- Menu Mobile -->
        <div class="flex flex-row gap-4 items-center lg:hidden">
            <div class="py-[4px] pb-[6px] px-[5px] rounded-sm ml-1 sm:ml-2 md:ml-5" @click="isMenuActive = !isMenuActive;isSearchActive=false" :class="{ active : isMenuActive}">
                <div id="menu" class="w-[20px] h-[20px] md:w-4 md:h-4  cursor-pointer">
                    <Svgs name="menu" color="white" />
                </div>
            </div>
           
        </div>
        <!-- Logo -->
        <div id="logo" class="relative left-[4vw] lg:static flex items-center lg:gap-5 h-full">
            <div class="lg:px-4 h-full flex items-center" :class="[windowSize < 1280 ? '':'shadow-header']">
                <img class="h-[25px] md:h-[38px] "  :src="[windowSize < 1280 ? '/images/logo-m.png':'/images/logo.png']" alt="Logo" />
            </div>
            <ul class="hidden w-auto  h-full lg:flex  lg:items-center ">
                <li class="h-full cursor-pointer  relative" v-for="(genre,id) in genres" :key="id">
                    <div @mouseenter="show_subMenu(id)" 
                        @mouseleave="hide_subMenu(id)" class="text-gray-500  hover:text-gray-200 h-full
                        p-3">

                        <div class="w-[20px] h-[20px] mx-auto">
                            <Svgs :name="genre[2]" color="currentColor"/>
                        </div>
                        <a href="#" class="text-[#C91C55] lg:text-inherit  text-xs" >{{genre[0]}}</a>
                    </div>
                    
                    
                    <ul ref="sub_menus" @mouseenter="show_subMenu(id)"  @mouseleave="hide_subMenu(id)"  
                    class="text-gray-200 hidden pt-5  ml-2 bg-black/80
                        grid-cols-3  w-max absolute -z-[1000] top-[55px] left-0"
                      
                        >
                        <template v-for="(sous_genre,idd) in genre[1]" :key="idd">
                            <li class="text-[#CCCCCC]  hover:bg-[#C91C55] hover:text-white m-1 ">
                                <a href="#" class="text-xs pl-2 pr-6">{{sous_genre}}</a>
                            </li>
                        </template>
                        
                    </ul>
                </li>
                
            </ul>
        </div>

        <!-- <Transition name="fade"> -->
           
                
            
        <!-- </Transition> -->

        <div class="flex flex-row gap-2 items-center">
                <div id="search" class=" lg:hidden w-7 h-7 md:w-6 md:h-6 cursor-pointer p-1 rounded-sm" @click="isSearchActive = !isSearchActive;isMenuActive = false" :class="{ active : isSearchActive}">
                    <Svgs name="search" color="white" />
                </div>
                <div id="mobile-search"  
                            class="hidden lg:flex py-[6px] rounded-sm shadow 
                            shadow-white/15 px-2 bg-[#232323]  flex-row items-center justify-between">
                        <input type="text" class=" text-white
                                focus:text-gray-200 outline-none text-xs bg-[#232323] 
                                " placeholder="Searching..." />

                        <div id="search" class="w-4 h-4 text-gray-300 active:text-gray-100 ">
                            <Svgs name="search" color="currentColor" />
                        </div>

                    </div>

                

            <div class="mx-2">
                <button @click="showLogin=true;" class="border  flex items-center gap-1
                 border-[#555] lg:border-none px-3 py-1 rounded-sm text-[#CACACA] uppercase active:text-white" 
                style="font-size:14px;"
                > 
                    <Svgs class="hidden lg:block" name="person-circle"  />
                    <span>Login</span>
                </button>
            </div>
        </div>
        <!-- Mobile Search -->
        <SearchMobile v-model="isSearchActive"/>
        
        <!-- Mobile Menu -->
        <MenuMobile v-model="isMenuActive" :genres="genres"/>
        
        
    </nav>
    <!-- Login Model -->
    <loginmodel v-model="showLogin" @update:model-value="showLogin = false"></loginmodel>
    
</template>


<script setup>
    import Svgs from "./svgs.vue";
    import {ref ,computed} from "vue";
    import loginmodel from "./loginmodel.vue";
    import MenuMobile from "./menuMobile.vue";
    import SearchMobile from "./searchMobile.vue";

    const isMenuActive = ref(false)
    const isSearchActive = ref(false)
    const showLogin = ref(false);
    const sub_menus = ref([])
    const genres = ref([
        ["Home",[],"house"],
        ["Genre",["Action","Adventure","Animation","Biography","Comdey","Costume","Crime","Documentary","Drama",
    "Family","Fantasy","History","Horror","Kungfu","Musical","Mystery","Mythological","Psychological"],"play-circle"],
    ["Country",["Asia","China","Euro","France","HongKong","India","Interantional","Japan","Korea"],"globe"],
    ["Movies",[],"film"],
    ["Tv-Series",[],"tv"],
    ["Top IMDB",[],"flag"]
])
    const windowSize = ref(window.innerWidth);
    
    function show_subMenu(id){
       sub_menus.value[id].classList.remove("hidden")
       sub_menus.value[id].classList.add("grid")

        console.log(id);
    }
    function hide_subMenu(id){
        sub_menus.value[id].classList.add("hidden")
        sub_menus.value[id].classList.remove("grid")
    }
    window.addEventListener('resize',function(e){
        windowSize.value = window.innerWidth
        if(windowSize.value > 1024){
            isSearchActive.value = false
            isMenuActive.value = false
        }
    });

</script>

<style scoped>
    
    .active{
        background-color: #666666;
    }
    .activeTab{
        color:white
    }
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
    }
    
    .top_down{
        animation-name: enterFromTop;
        animation-duration: 0.5s;
        animation-timing-function: linear;
        animation-direction: normal;
    }
    .down_top{
        animation-name: leaveToTop;
        animation-duration: 0.5s;
        animation-timing-function: linear;
        animation-direction: normal;
    }
@keyframes enterFromTop{
    0%{
        transform: translateY(-50px);
    }
    100%{
        transform: translateY(0px);
    }
    
}
@keyframes leaveToTop{
    0%{
        transform: translateY(0px);
    }
    100%{
        transform: translateY(-50px);
    }
    
}
.shadow-header{
    background: #c91c55 url('/images/logo-shadow.png') top center no-repeat;
    z-index: 2;
    font-size: 0;
    margin: 0;
}
</style>

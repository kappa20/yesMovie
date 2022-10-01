<template>
    <nav class="bg-[#323232] h-[50px] md:h-[60px] lg:h-[70px] w-screen flex flex-row items-center justify-between">
        <!-- Menu Mobile -->
        <div class="flex flex-row gap-4 items-center lg:hidden">
            <div class="py-[4px] pb-[6px] px-[5px] rounded-sm" @click="isMenuActive = !isMenuActive;isSearchActive=false" :class="{ active : isMenuActive}">
                <div id="menu" class="w-[20px] h-[20px] md:w-3 md:h-3 cursor-pointer">
                    <Svgs name="menu" color="white" />
                </div>
            </div>
           
        </div>
        <!-- Logo -->
        <div id="logo" class="relative left-[4vw] lg:static flex items-center lg:gap-5 h-full">
            <div class="lg:px-4 h-full flex items-center" :class="[windowSize < 1280 ? '':'shadow-header']">
                <img class="h-[25px] md:h-[38px] "  :src="[windowSize < 1280 ? '/images/logo-m.png':'/images/logo.png']" alt="Logo" />
            </div>
                <ul class=" hidden w-auto lg:flex lg:gap-5 lg:items-center ">
                    <li class="text-gray-500" v-for="(genre,id) in genres" :key="id">

                        <div class="w-[20px] h-[20px] mx-auto">
                                <Svgs :name="genre[2]" color="currentColor"/>
                        </div>
                        <a href="#" class="text-[#C91C55] lg:text-gray-500 text-xs" >{{genre[0]}}</a>
                        
                        <ul  class="hidden">
                            <template v-for="(sous_genre,idd) in genre[1]" :key="idd">
                                <li >
                                    <a href="#" class="text-[#CCCCCC] text-xs pl-2">{{sous_genre}}</a>
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

                

            <div class="ml-2">
                <button @click="showLogin=true;" class="border  flex items-center gap-1
                 border-[#555] lg:border-none px-3 py-1 rounded-sm text-[#CACACA] uppercase active:text-white" 
                style="font-size:14px;"
                > 
                <Svgs class="hidden lg:block" name="person-circle"  />
                 <span>Login</span></button>
            </div>
        </div>

        <Transition name="fade">

            <div id="mobile-search" v-show="isSearchActive" 
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
        
        <Transition name="fade">
            <div id="menu" v-show="isMenuActive" class="absolute top-[50px] md:top-[60px] bg-[#222222] left-0 w-screen">
                <ul class="w-screen drop-shadow-md">
                    <li v-for="(genre,id) in genres" :key="id">
                        <a href="#" class="text-[#C91C55] inline-block text-[14px] pl-2 py-2 font-semibold" >{{genre[0]}}</a>
                        <ul  class="grid grid-cols-3">
                            <template v-for="(sous_genre,idd) in genre[1]" :key="idd">
                                <li >
                                    <a href="#" class="text-[#CCCCCC] text-xs pl-2">{{sous_genre}}</a>
                                </li>
                            </template>
                            <div class="border-b-[1px] w-screen border-gray-50/10 "></div>
                        </ul>
                    </li>
                    
                </ul>
            </div>
        </Transition>
        
        
    </nav>
    <!-- Login Menu -->
    <Transition name="fade">
        <main id="kappa"  v-show="showLogin" class="absolute overflow-hidden z-50 p-[6px]  top-0 left-0 w-screen h-screen bg-black/90 
        grid place-items-center ">
            
                <div  class="w-full relative top-[-15vh]  sm:max-w-[430px] "
                 :class="[showLogin ? 'top_down' : 'down_top']">

                    <div class="grid grid-cols-3 mb-4 min-h-max relative">

                            <!--carret  -->
                            <div
                            :class="[isLoginTab ? '':'translate-x-[850%]']" 
                            class="w-4 h-4 absolute top-[110%] left-[15%] transition-transform duration-700">
                                <Svgs name="carret-up" color="white" />
                            </div>
                            <!-- Login -->
                            <div 
                            :class="{ activeTab : isLoginTab}"
                            class="flex gap-1 cursor-pointer items-center 
                            justify-center text-[#aaa] "
                            @click="isLoginTab = true"
                            >
                                <div class="w-4 h-4 p-[2px]">
                                    <Svgs name="user" color="currentColor"/> 
                                </div>
                                <strong class="text-sm">Login</strong>
                            </div>

                            <!-- Registration  -->
                            <div
                            :class="{ activeTab : !isLoginTab}"
                            class="justify-self-center flex items-center gap-1
                            text-[#aaa] 
                            cursor-pointer" 
                            @click="isLoginTab = false"
                            >
                                <div class="w-4 h-4 ">
                                    <Svgs name="plus-circle" color="currentColor"/> 
                                </div>
                                <strong class="text-sm">Register</strong>
                            </div>

                            <!--Clear Button (X)  -->
                            <div class="text-white flex items-center justify-self-end">
                                <button class="w-3" @click="showLogin=false;">
                                    <Svgs name="x" color="currentColor"/>
                                </button>
                            </div>

                    </div>

                    <!-- tabs -->
                    <div id="tabsContainer" class="relative h-max">
                            
                            <!-- Login Tab -->
                            <div :class="[isLoginTab ? '':'scale-0 opacity-0']"  class="flex flex-col w-full
                            transition-opacity delay-75 duration-500   ease-in-out   gap-4 absolute top-0 left-0">
                                    <div  id="loginTab" class="w-full bg-white  rounded-md p-5 pt-[30px]">
                                        <form class="text-sm  flex flex-col gap-5" action="" method="Post">
                                                <div class="text-[#333]">
                                                    <input  class="w-full pb-2 relative z-10 outline-none border-b
                                                    border-b-[#666] transition-opacity focus:border-b-[#c91c55]" type="text" name="username" placeholder="Username">
                                                </div>
                                                <div class="text-[#333]">
                                                    <input class="w-full pb-2 relative z-10 outline-none border-b
                                                    border-b-[#666] transition-opacity focus:border-b-[#c91c55]" type="password" name="password" placeholder="Password">
                                                </div>
                                            

                                                <div class="text-xs flex justify-between text-[#333]">
                                                    <span>
                                                        <input type="checkbox" name="remember" id="remember">Remember me
                                                    </span>
                                                    <a href="#" class="text-[#888]">Forgot password ?</a>
                                                </div>
                                            
                                            
                                                <button class="bg-[#c91c55] h-[44px] text-white">Login</button>
                                        </form>
                                    </div>
                                    <div class="border border-white text-center text-sm p-4 text-white rounded-md">
                                        <p>Not a member yet? <strong class="cursor-pointer" @click="isLoginTab=false">Join now!</strong></p>
                                    </div>
                            </div>

                            <!-- Registration Tab -->
                            <div :class="[isLoginTab ? 'scale-0 opacity-0':'']"  id="registerTab" class="flex  flex-col 
                            transition-opacity delay-75  duration-500 ease-in-out gap-4 absolute top-0 left-0">
                                <div  id="registrationTab" class="w-full bg-white  rounded-md p-5">
                                        <form class="text-sm  flex flex-col gap-3" action="" method="Post">
                                                <div class="mb-2">
                                                    <p class="text-xs text-[#333]">
                                                        When becoming members of the site, 
                                                        you could use the full range
                                                         of functions and enjoy the most exciting films.
                                                    </p>
                                                </div>
                                                <div class="text-[#333]">
                                                    <input  class="w-full pb-2 relative z-10 outline-none border-b
                                                    border-b-[#666] transition-opacity focus:border-b-[#c91c55]" type="text" name="fname" placeholder="Full name">
                                                </div>
                                                <div class="text-[#333]">
                                                    <input class="w-full pb-2 relative z-10 outline-none border-b
                                                    border-b-[#666] transition-opacity focus:border-b-[#c91c55]" type="text" name="username" placeholder="Username">
                                                </div>
                                                <div class="text-[#333]">
                                                    <input class="w-full pb-2 relative z-10 outline-none border-b
                                                    border-b-[#666] transition-opacity focus:border-b-[#c91c55]" type="email" name="email" placeholder="Email">
                                                </div>
                                                <div class="text-[#333]">
                                                    <input class="w-full pb-2 relative z-10 outline-none border-b
                                                    border-b-[#666] transition-opacity focus:border-b-[#c91c55]" type="password" name="password" placeholder="Password">
                                                </div>
                                                <div class="text-[#333]">
                                                    <input class="w-full pb-2 relative z-10 outline-none border-b
                                                    border-b-[#666] transition-opacity focus:border-b-[#c91c55]" type="password" name="Rpassword" placeholder="Password">
                                                </div>
                                                                                                                                                                    
                                                <button class="bg-[#c91c55] h-[44px] hover:opacity-90 text-white">Register</button>
                                        </form>
                                    </div>
                                    <div class="border border-white text-center text-sm p-4 text-white rounded-md">
                                        <button @click="isLoginTab=true"> Back to login</button>
                                    </div>
                            </div>

                    </div>

                </div>
            
        
        
    </main>
    </Transition>
   
    
</template>


<script setup>
    import Svgs from "./svgs.vue";
    import {ref ,computed} from "vue";
import Svgs1 from "./svgs.vue";
    const isMenuActive = ref(false)
    const isSearchActive = ref(false)
    const showLogin = ref(false);

    const isLoginTab = ref(true);
    const genres = ref([
        ["Home",[],"house"],
        ["Genre",["Action","Adventure","Animation","Biography","Comdey","Costume","Crime","Documentary","Drama",
    "Family","Fantasy","History"],"play-circle"],
    ["Country",["Asia","China","Euro","France","HongKong","India","Interantional","Japan","Korea"],"globe"],
    ["Movies",[],"film"],
    ["Tv-Series",[],"tv"],
    ["Top IMDB",[],"flag"]
])
    const windowSize = ref(window.innerWidth);
    window.addEventListener('click',function(e){
       if(e.target.id == "kappa"){
        
        showLogin.value = false;
       }
       
    })
    window.addEventListener('resize',function(e){
        windowSize.value = window.innerWidth
        if(windowSize.value > 1024){
            isSearchActive.value = false
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

<template>
    <!-- navbar -->
    <nav class="bg-[#323232]  flex items-center justify-between" @resize.window="alert('resized')">
        <div class="h-full w-[60%] md:w-[65%]  gap-3 flex items-center justify-between p-3 " id="MenuIcon">
            <!-- Mobile Hamburger Menu icon -->
            <div 
                class="text-white  py-[0.3rem] px-[0.15rem] rounded-md cursor-pointer lg:hidden"
                @click="m_open_menu = !m_open_menu"
                :class="[m_open_menu ? 'bg-[#666666]':'']" 
            >
                <fa  icon="bars"  class="w-8 text-2xl "/>
            </div>
            <!--End  -->


            <!--Start Logo YesMovie -->
            <div class="text-white cursor-pointer select-none ">
                 <img class="h-12" src="../imgs/logo-m.png" alt="logo">
            </div>
            <!-- end -->

            <!-- menu Desktop -->
                <div class="hidden lg:flex justify-evenly items-center  w-full h-12">
                    <!-- elemen -->
                    <div v-for="ele in genreList" :key="ele.id" class="relative text-gray-500 hover:text-gray-200 cursor-pointer">
                        <a href="#" class="flex flex-col relative"
                        @mouseover="currentHover = ele.id"
                       
                        >
                            <fa size="lg"  :icon="ele.icon" />
                            <span class="mt-1">{{ele.title}}</span>
                           
                        </a>
                         <div v-show="ele.id == currentHover" class=" bg-[#232122]/90  w-[40vw] absolute top-16 left-0">
                            <div  
                                class="grid grid-cols-3 gap-x-2 gap-y-1 "
                                v-if="ele.items != []"
                                >
                                    <p v-for="(item,i) in ele.items" :key="i" class=" hover:bg-[#C91C55] m-2  ">
                                        <a class="inline-block p-1 text-gray-200" href="#">{{item}}</a>
                                    </p>
                            </div>
                         </div>
                        
                    </div>
                </div>

            <!-- end -->
            <!-- menu mobile  -->
            <div 
                class="absolute bg-transparent w-full  top-16 left-0 md:p-2"
                v-if="m_open_menu"
                >

                <menu-navigation v-model="m_open_menu" :test="genreList"/>
            </div>
            <!-- end -->
        </div>
        

        <div id="searchLogin" class="h-full pr-3  flex gap-6  items-center ">
            <div id="m_search" v-if="m_open_search"
            class="w-full h-14 bg-[#232323] flex items-center 
             top-14 left-0
            lg:bg-transparent
            "
            :class="[windowWidth < lg ? 'absolute':'']"
            >
        
                <div class="flex relative w-full p-1 lg:p-0 ">
                    <input 
                        class="bg-[#555555] w-full text-gray-400  
                        text-sm outline-none border-0 py-2
                        px-3 rounded-md shadow-md lg:bg-[#232323] lg:border lg:border-black
                        lg:m-0 lg:py-1" type="text" placeholder="Searching..."  />
                     <fa icon="search" class="text-gray-400/95 text-xl absolute top-3 right-3 lg:top-1"/>
                </div>
                
            </div>
            <div 
                class="text-white py-[0.3rem] px-2 rounded-md cursor-pointer select-none
                lg:p-0 "
                 @click="m_open_search = !m_open_search"
                :class="[m_open_search ? 'bg-[#666666]':'']"
                v-show="windowWidth < lg"
            >
                 <fa  icon="search" class="text-white text-xl"/>
            </div>
           
            <button  class="select-none border text-md border-gray-500
             text-gray-300 py-[0.1rem] px-3 rounded-md">LOGIN</button>
        </div>
    </nav>
    <!-- END NavBar -->
    <div>
        <img src="../imgs/img1.jpg" title="image1">
        <img src="../imgs/img2.jpg" title="image2">    
        <img src="../imgs/img3.jpg" title="image3">
        <img src="../imgs/img4.jpg" title="image4">
        <img src="../imgs/img5.jpg" title="image5">
        <img src="../imgs/img6.jpg" title="image6">
    </div>
    
</template>
<script setup>
    import {ref,reactive} from "vue";
    import { onMounted } from "vue";
import MenuNavigation from "../components/MenuNavigation.vue";
     /* @resize.window="show = (window.innerWidth < 768) ? false : true" */
    const m_open_menu = ref(false);
    const m_open_search = ref(false);
    const windowWidth = ref(0)
    const lg = ref(1024);
    const bigImag = ref("../imgs/logo.png")
    const smallImg = ref('../imgs/logo-m.png')
    const currentHover = ref()
    const genreList = reactive([
        {id:1,title:'Home',items:[],icon:"house"},
        {id:2,title:'Genre',items:["Action","Adventure","Animation","Biography","Comedy","Crime",
        "Costume","Fantasy","Musical","Horror","Mystery"],icon:"play"},
        {id:3,title:'Country',
        items:["Asia","China","Euro","France","HongKong","India","International","Japan","Korea"]
        ,icon:"globe"},
        {id:4,title:"Movie",items:[],icon:"clapperboard"},
        {id:5,title:"Tv-Series",items:[],icon:"tv"},
        {id:6,title:"Top IMDB",items:[],icon:"flag"},
    ])
        
    
    function changeWidth(e){
        windowWidth.value = e.target.innerWidth
       
        if(windowWidth.value > lg.value){
            m_open_search.value = true
             m_open_menu.value = false
        }
        else{
             m_open_search.value = false
        }
    }
   
    onMounted(()=>{
        windowWidth.value = window.innerWidth
        window.addEventListener("resize",changeWidth)
        if(windowWidth.value > lg.value){
            m_open_search.value = true
        }
        else{
             m_open_search.value = false
        }
    })
</script>

<!-- bg-[#666666] -->
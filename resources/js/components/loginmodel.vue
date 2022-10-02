<template>

<Transition name="fade">
        <main id="kappa"  v-show="props.modelValue" class="absolute overflow-hidden z-50 p-[6px]  top-0 left-0 w-screen h-screen bg-black/90 
        grid place-items-center ">
            
                <div  class="w-full relative top-[-15vh]  sm:max-w-[430px] "
                 :class="[props.modelValue ? 'top_down' : 'down_top']">

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
                                <button class="w-3" @click="emit('update:modelValue')">
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
    import {ref} from "vue";
    import Svgs from "./svgs.vue";
    const isLoginTab = ref(true);   
    
    const props = defineProps(['modelValue'])
    const emit = defineEmits(['update:modelValue'])

    window.addEventListener('click',function(e){
       if(e.target.id == "kappa"){
        emit('update:modelValue')
       }
       
    })

    

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
</style>
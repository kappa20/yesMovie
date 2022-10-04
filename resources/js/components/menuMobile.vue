<template>
    <Transition name="fade">
            <div id="menu" v-show="props.modelValue" class="absolute   top-[50px] md:top-[60px] bg-[#222222] left-0 w-screen">
                <ul class="w-full drop-shadow-md pt-2 px-4">
                    <li v-for="(value,genre) in props.genres" :key="id" class="text-[#C91C55] hover:text-white">
                        <a href="#" class="text-inherit inline-block text-[14px]  py-2 font-semibold" >{{genre}}</a>
                        <ul  class="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-5 mb-3">
                            <template v-for="(sous_genre) in value.data" :key="idd">
                                <li class="h-max sm:bg-[#282828] sm:hover:bg-[#C91C55] sm:py-1 cursor-pointer">
                                    <a href="#" class="text-[#CCCCCC] 
                                     hover:text-white sm:inline-block  
                                      sm:h-full  sm:w-full
                                        text-xs pl-2">{{sous_genre}}</a>
                                </li>
                            </template>
                           
                        </ul>
                        <div class="border-b-[1px] w-full border-gray-50/10 
                            lg:hidden"></div>
                    </li>
                    
                </ul>
            </div>
        </Transition>
</template>

<script setup>

    const props = defineProps(['modelValue',"genres"])
    const emits = defineEmits(['update:modelValue'])

   

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
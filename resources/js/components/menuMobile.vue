<template>
    <Transition name="fade">
            <div id="menu" v-show="props.modelValue" class="absolute top-[50px] md:top-[60px] bg-[#222222] left-0 w-screen">
                <ul class="w-screen drop-shadow-md">
                    <li v-for="(genre,id) in props.genres" :key="id">
                        <a href="#" class="text-[#C91C55] inline-block text-[14px] pl-2 py-2 font-semibold" >{{genre[0]}}</a>
                        <ul  class="grid grid-cols-3">
                            <template v-for="(sous_genre,idd) in genre[1]" :key="idd">
                                <li >
                                    <a href="#" class="text-[#CCCCCC] text-xs pl-2">{{sous_genre}}</a>
                                </li>
                            </template>
                            <div class="border-b-[1px] w-screen border-gray-50/10 lg:hidden"></div>
                        </ul>
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
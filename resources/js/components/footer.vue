<template>

    <main class="pt-10 shadow-sm relative z-1">
        <div class="custom_border hidden sm:grid sm:grid-cols-4   text-[14px] mx-auto max-w-[700px] mb-10 md:mb-20 place-items-center">
            
            <template v-for="(value,keyy) in data" :key="keyy">
                <div class="grid grid-cols-1 gap-1 md:gap-2 pr-7 border-r-[1px] border-gray-50/10  text-center"
                style="align-content:space-around">
                    <template v-for="(item,ii) in value" :key="ii">
                        <a href="" class=" text-[#ccc] hover:text-white">{{item}}</a>
                    </template>
                </div>
                
            </template>
        
        </div>
        <div class="grid place-items-center gap-2">
            <img class="h-12 md:h-16" src="/images/logo-footer.png" alt="YesMovieIsTheBest">
            <p class="text-[#aaa] text-[14px] text-center">Copyright © 2022 Yesmovies. All rights reserved.</p>
            <p class="text-[#aaa] text-xs text-center mb-[10px]">Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.</p>
            
            <div class="flex justify-center gap-5 mb-[10px]">
                <IconLink link="https://web.facebook.com/" title="facebook" image='facebook.png'/>
                <IconLink link="https://twitter.com/" title="facebook" image='twitter.png'/>
                <IconLink link="https://google.com/" title="google" image='google-plus.png'/>
            </div>
            
            <div class="flex justify-center gap-5">
                <a href="" class="text-[#aaa] hover:text-white" title="Privacy Policy">Terms & Privacy Policy</a> 
                <a href="" class="text-[#aaa] hover:text-white" title="DMCA">DMCA</a>
            </div>
        </div>
    </main>
    
</template>

<script setup>
import { onMounted,ref } from 'vue';
import IconLink from './iconLink.vue';
const props = defineProps(['genres'])
const data = ref([])
onMounted(()=>{
    for(var genre in props.genres){
        for(let test of props.genres[`${genre}`].data){
            data.value.push(test)
        }
    }
    data.value = splitArrayIntoChunksOfLen(data.value,7)
    console.log(data.value)
})
function splitArrayIntoChunksOfLen(arr, len) {
  var chunks = [], i = 0, n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }
  return chunks;
}
</script>

<style scoped>
    .custom_border > div:last-child{
        border-right:none;
    }
    
</style>
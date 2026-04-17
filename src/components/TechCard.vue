<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
defineProps<{ trend: any, isActive: boolean, icon: any }>()
</script>

<template>
  <div
    class="group relative p-8 rounded-[32px] transition-all duration-500 border border-transparent flex items-center gap-8 cursor-pointer overflow-hidden"
    :class="isActive ? 'bg-white/5 border-white/10 scale-105 shadow-2xl' : 'hover:bg-white/5 opacity-60 hover:opacity-100'"
  >
    <div v-if="isActive" class="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent"></div>
    <div class="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
         :class="isActive ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/40 rotate-3' : 'bg-white/5 text-slate-600'">
      <component :is="icon" class="w-8 h-8" />
    </div>
    <div class="relative z-10 flex-grow">
      <div class="text-[9px] font-black tracking-[0.4em] text-cyan-500/50 mb-1 uppercase italic">#Trend 0{{ trend.id }}</div>
      <h4 class="text-xl font-black italic transition-colors uppercase" :class="isActive ? 'text-white' : 'text-slate-500'">
        {{ trend.title }}
      </h4>
    </div>
    <ChevronRight class="relative z-10 w-6 h-6 text-cyan-500 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
  </div>
</template>

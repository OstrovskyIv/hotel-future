<script setup lang="ts">
import type { Component } from 'vue'
import { ChevronRight, Sparkles, View, Smartphone, ShieldCheck, Zap } from 'lucide-vue-next'
import type { Trend } from '@/entities/trend'

defineProps<{
  trend: Trend,
  isActive: boolean
}>()

const icons: Record<string, Component> = {
  Sparkles,
  View,
  Smartphone,
  ShieldCheck,
  Zap
}
</script>

<template>
  <div
    class="group relative p-5 md:p-6 rounded-[24px] md:rounded-[32px] transition-all duration-500 border flex items-center gap-4 md:gap-6 cursor-pointer overflow-hidden"
    :class="isActive
      ? 'bg-accent/5 border-accent shadow-lg scale-[1.02]'
      : 'bg-white/5 border-white/5 hover:border-white/20 opacity-60 hover:opacity-100'"
  >
    <div
      class="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-500"
      :class="isActive ? 'bg-accent text-black shadow-lg shadow-accent/20' : 'bg-white/5 text-slate-500'"
    >
      <component :is="icons[trend.icon]" class="w-5 h-5 md:w-6 md:h-6" />
    </div>

    <div class="relative z-10 flex-grow text-left">
      <div class="text-[7px] md:text-[8px] font-black tracking-[0.3em] text-accent/50 mb-1 uppercase italic">
        Module 0{{ trend.id }}
      </div>
      <h4 class="text-sm md:text-lg font-light uppercase tracking-tighter transition-colors" :class="isActive ? 'text-white' : 'text-slate-400'">
        {{ trend.title }}
      </h4>
    </div>

    <ChevronRight
      class="relative z-10 w-4 h-4 text-accent transition-all"
      :class="isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'"
    />
  </div>
</template>

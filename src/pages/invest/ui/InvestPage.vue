<script setup lang="ts">
import { trends } from '@/entities/trend'
import { Globe, Users, TrendingUp } from 'lucide-vue-next'
defineEmits(['open-details'])
</script>

<template>
  <div class="pt-40 pb-32 max-w-7xl mx-auto px-6">
    <div class="grid md:grid-cols-3 gap-10 mb-40">
      <div v-for="(s, i) in [
        {l: 'Капитализация', v: '$2.4B', ic: TrendingUp},
        {l: 'Инвесторы', v: '14 Global Funds', ic: Users},
        {l: 'Локации', v: 'Dubai, Shanghai, Antalya', ic: Globe}
      ]" :key="i" class="glass-card p-10 text-center">
        <component :is="s.ic" class="w-6 h-6 text-accent mx-auto mb-6 opacity-40" />
        <div class="text-[9px] uppercase tracking-[0.4em] text-slate-500 mb-2">{{ s.l }}</div>
        <div class="text-3xl font-light">{{ s.v }}</div>
      </div>
    </div>

    <h2 class="text-center text-4xl font-light uppercase mb-20 tracking-widest">Innovation Network</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="t in trends" :key="t.id" @click="$emit('open-details', t)"
           class="glass-card p-12 hover:border-accent transition-all cursor-pointer group flex justify-between items-center">
        <div class="max-w-md">
          <div class="text-accent text-[8px] font-black mb-4 tracking-[0.5em]">MODULE 0{{t.id}}</div>
          <h4 class="text-2xl font-light uppercase mb-4">{{ t.title }}</h4>
          <p class="text-slate-500 text-sm italic line-clamp-2">{{ t.implementation }}</p>
        </div>
        <div class="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors">
          <span class="text-accent text-xl">→</span>
        </div>
      </div>
    </div>
  </div>
</template>

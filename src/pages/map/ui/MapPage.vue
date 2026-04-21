<script setup lang="ts">
import { ref } from 'vue'
import { trends, type Trend } from '@/entities/trend'
import { TechCard } from '@/entities/tech'

const selectedTrend = ref<Trend>(trends[0] as Trend)
const emit = defineEmits(['open-lightbox'])

const selectTrend = (t: Trend) => {
  selectedTrend.value = t
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    window.scrollTo({ top: 150, behavior: 'smooth' })
  }
}

const onHoverTrend = (t: Trend) => {
  if (typeof window !== 'undefined' && window.innerWidth > 1024) {
    selectedTrend.value = t
  }
}
</script>

<template>
  <section class="pt-24 md:pt-40 pb-20 md:pb-32 max-w-[1750px] mx-auto px-4 md:px-12">
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-16 gap-6 text-left">
      <h2 class="text-3xl md:text-7xl font-thin uppercase tracking-tighter leading-none text-white">
        Технологии<br><span class="opacity-30 font-black italic">2030</span>
      </h2>
      <p class="max-w-sm text-slate-500 text-[10px] md:text-xs uppercase tracking-[0.3em] leading-relaxed">
        Интеллектуальные модули управления средой в сети Nova Horizon.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-10 gap-6 md:gap-10">
      <div class="lg:col-span-7 lg:sticky lg:top-32 order-1">
        <div
          @click="emit('open-lightbox', selectedTrend.mainImage)"
          class="relative rounded-[40px] md:rounded-[60px] overflow-hidden border border-white/10 aspect-[4/3] md:aspect-video shadow-2xl bg-slate-900 group cursor-zoom-in"
        >
          <Transition name="fade-tech" mode="out-in">
            <img
              :src="selectedTrend.mainImage"
              :key="selectedTrend.id"
              alt="Tech visualization"
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </Transition>

          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 md:p-12 flex flex-col justify-end text-left">
            <div class="text-accent text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-70">
              Module Specification 0{{ selectedTrend.id }}
            </div>
            <h3 class="text-2xl md:text-6xl font-light uppercase text-white mb-4 md:mb-8 tracking-tight">
              {{ selectedTrend.title }}
            </h3>
            <p class="text-slate-300 max-w-2xl text-xs md:text-lg font-light leading-relaxed italic line-clamp-3 md:line-clamp-none">
              {{ selectedTrend.impact }}
            </p>
          </div>
        </div>
      </div>

      <div class="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 order-2">
        <TechCard
          v-for="t in trends"
          :key="t.id"
          :trend="t"
          :isActive="selectedTrend.id === t.id"
          @click="selectTrend(t)"
          @mouseenter="onHoverTrend(t)"
        />
      </div>
    </div>
  </section>
</template>

<style>
.fade-tech-enter-active,
.fade-tech-leave-active {
  transition: opacity 0.5s ease;
}
.fade-tech-enter-from,
.fade-tech-leave-to {
  opacity: 0;
}
</style>

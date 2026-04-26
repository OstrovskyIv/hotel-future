<script setup lang="ts">
import { Shield, Star, Zap } from 'lucide-vue-next'
import { TheGallery } from '@/widgets/the-gallery'
defineEmits(['open-lightbox'])
</script>

<template>
  <div class="animate-in fade-in duration-1000">
    <section class="h-screen relative flex items-center justify-center overflow-hidden">
      <img
        src="/hotel-main.webp"
        class="absolute inset-0 w-full h-full object-cover scale-105 animate-subtle-zoom"
        alt="Hero"
      />
      <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      <div class="relative z-10 text-center px-6">
        <h1 class="text-6xl md:text-[120px] font-thin uppercase tracking-[0.2em] leading-none mb-8">
          Nova <span class="font-black italic text-accent">Horizon</span>
        </h1>
        <p class="text-[10px] md:text-xs uppercase tracking-[0.8em] text-white/60 mb-12">Intelligence Resorts Network</p>
        <div class="w-px h-24 bg-accent mx-auto animate-bounce"></div>
      </div>
    </section>

    <section class="py-40 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-20">
      <div v-for="(v, i) in [
        {t: 'Приватность', d: 'Квантовое шифрование ваших данных и полная физическая анонимность.', ic: Shield},
        {t: 'Эксклюзивность', d: 'Только 12 номеров в каждой локации для обеспечения абсолютного комфорта.', ic: Star},
        {t: 'Интеллект', d: 'NovaOS управляет каждым миллиметром пространства, предугадывая желания.', ic: Zap}
      ]" :key="i" class="text-center group">
        <component :is="v.ic" class="mx-auto w-8 h-8 text-accent mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
        <h4 class="text-lg uppercase tracking-widest mb-6 font-light">{{ v.t }}</h4>
        <p class="text-slate-500 text-sm leading-relaxed font-light">{{ v.d }}</p>
      </div>
    </section>

    <TheGallery @open-lightbox="(img) => $emit('open-lightbox', img)" />
  </div>
</template>

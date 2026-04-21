<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { X } from 'lucide-vue-next'
import { storage } from '@/shared/lib/storage'
import { TheHeader } from '@/widgets/the-header'
import { TheFooter } from '@/widgets/the-footer'
import { BookingModal } from '@/features/booking'
import { type Trend } from '@/entities/trend'

import { HomePage } from '@/pages/home'
import { MapPage } from '@/pages/map'
import { SchemePage } from '@/pages/scheme'
import { InvestPage } from '@/pages/invest'

const currentPage = ref('home')
const isBookingOpen = ref(false)
const lightboxImg = ref<string | null>(null)
const selectedTrend = ref<Trend | null>(null)

onMounted(() => storage.init())

const setPage = (p: string) => {
  currentPage.value = p
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="min-h-screen">
    <TheHeader :currentPage="currentPage" @change-page="setPage" @open-booking="isBookingOpen = true" />

    <main>
      <HomePage v-if="currentPage === 'home'" @open-lightbox="(img) => lightboxImg = img" />
      <MapPage v-if="currentPage === 'map'" @open-lightbox="(img) => lightboxImg = img" />
      <SchemePage v-if="currentPage === 'scheme'" />
      <InvestPage v-if="currentPage === 'invest'" @open-details="(t) => selectedTrend = t" />
    </main>

    <Transition name="fade">
      <div v-if="lightboxImg" @click="lightboxImg = null" class="fixed inset-0 z-[2000] flex items-center justify-center p-6 backdrop-blur-3xl bg-black/95 cursor-zoom-out">
        <img :src="lightboxImg" class="max-w-[90vw] max-h-[85vh] rounded-[40px] shadow-2xl border border-white/10 object-contain" />
      </div>
    </Transition>

    <Transition name="fade">
      <div v-if="selectedTrend" class="fixed inset-0 z-[1500] flex items-center justify-center p-4 md:p-10 backdrop-blur-3xl bg-black/90">
        <div class="bg-[#0a0a0a] border border-white/10 rounded-[60px] max-w-6xl w-full relative shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh]">
          <button @click="selectedTrend = null" class="absolute top-8 right-8 z-20 p-4 bg-black/50 rounded-full border border-white/10 text-white hover:bg-accent hover:text-black transition-all"><X class="w-6 h-6" /></button>
          <div class="lg:w-1/2 h-64 lg:h-auto"><img :src="selectedTrend.mainImage" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" /></div>
          <div class="lg:w-1/2 p-10 md:p-20 overflow-y-auto text-left">
            <div class="text-accent font-black uppercase tracking-[0.5em] text-[10px] mb-6">Module 0{{ selectedTrend.id }}</div>
            <h3 class="text-5xl font-thin uppercase mb-8 leading-none text-white tracking-tighter">{{ selectedTrend.title }}</h3>
            <p class="text-slate-400 text-lg leading-relaxed font-light italic">{{ selectedTrend.implementation }}</p>
          </div>
        </div>
      </div>
    </Transition>

    <BookingModal :isOpen="isBookingOpen" @close="isBookingOpen = false" />
    <TheFooter />
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active { transition: all 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; filter: blur(20px); }
</style>

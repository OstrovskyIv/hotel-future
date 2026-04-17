<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { trends, futureHotels, type Trend } from './data/trends'
import { storage } from './utils/storage'

// Компоненты
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import TechCard from './components/TechCard.vue'
import BookingModal from './components/BookingModal.vue'
import NeuralConfigurator from './components/NeuralConfigurator.vue'
import TheGallery from './components/TheGallery.vue'

// Иконки
import {
  Sparkles, View, Smartphone, ShieldCheck, X, Info,
  Maximize2, Cpu, Globe, Layers, ArrowRight
} from 'lucide-vue-next'

const currentPage = ref('home')
const currentMood = ref(storage.getMood())

// ИСПРАВЛЕНИЕ ОШИБКИ: Используем "as Trend", чтобы TS не ругался на undefined
const selectedTrend = ref<Trend>(trends[0] as Trend)

const isBookingOpen = ref(false)
const isDetailOpen = ref(false)
const lightboxImg = ref<string | null>(null)
const searchQuery = ref('')

const icons: Record<string, any> = { Sparkles, View, Smartphone, ShieldCheck }

onMounted(() => {
  storage.init()
})

const changeMood = (m: string) => {
  currentMood.value = m
  storage.setMood(m)
}

const setPage = (p: string) => {
  currentPage.value = p
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const openDetails = (t: Trend) => {
  selectedTrend.value = t
  isDetailOpen.value = true
}

const filteredHotels = computed(() =>
  futureHotels.filter(h =>
    h.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)
</script>

<template>
  <div class="min-h-screen transition-colors duration-1000">

    <TheHeader :currentPage="currentPage" @change-page="setPage" @open-booking="isBookingOpen = true" />
    <BookingModal :isOpen="isBookingOpen" :searchQuery="searchQuery" :hotels="filteredHotels" @update:searchQuery="searchQuery = $event" @close="isBookingOpen = false" />

    <!-- LIGHTBOX -->
    <Transition name="fade">
      <div v-if="lightboxImg" @click="lightboxImg = null" class="fixed inset-0 z-[1000] flex items-center justify-center p-6 backdrop-blur-3xl bg-black/95 cursor-zoom-out">
        <img :src="lightboxImg" class="max-w-[90vw] max-h-[90vh] rounded-[40px] shadow-2xl animate-in zoom-in-95 border border-white/10 object-contain" alt="Просмотр" />
        <button class="absolute top-10 right-10 p-4 bg-white/10 rounded-full text-white hover:bg-white/20"><X /></button>
      </div>
    </Transition>

    <!-- ГЛАВНАЯ -->
    <main v-if="currentPage === 'home'" class="animate-in fade-in duration-700 pt-24">
      <section class="h-[80vh] mx-4 md:mx-10 rounded-[60px] relative overflow-hidden border border-white/5 shadow-2xl">
        <img src="/hotel.png" class="absolute inset-0 w-full h-full object-cover opacity-40 animate-subtle-zoom" alt="Nova Horizon" />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent shadow-accent"></div>

        <div class="relative z-10 h-full flex flex-col justify-center px-8 md:px-24 text-center lg:text-left">
          <h1 class="text-6xl md:text-[150px] font-black italic uppercase leading-[0.8] tracking-tighter">
            <span class="text-accent italic uppercase drop-shadow-lg">NOVA</span><br>
            <span class="opacity-50 text-white font-black italic uppercase drop-shadow-2xl">HORIZON</span>
          </h1>

          <div class="mt-16 flex flex-col lg:flex-row gap-12 items-center lg:items-end justify-center lg:justify-start">
            <NeuralConfigurator :activeMood="currentMood" @update-mood="changeMood" />
            <div class="text-slate-500 max-w-sm italic text-sm border-l-2 border-accent/40 pl-8 leading-relaxed text-left">
              Интеллектуальный курорт под управлением NovaOS. <br>
              Нейросети адаптируют каждый метр пространства.
            </div>
          </div>
        </div>
      </section>

      <section class="py-32 px-10 max-w-7xl mx-auto">
        <div class="grid md:grid-cols-3 gap-10">
          <div v-for="(item, i) in [
             {t: 'Фронтенд-Ядро', d: 'Vue 3 + TS. Реактивный интерфейс с мгновенным откликом и поддержкой WebXR.', ic: Layers},
             {t: 'Нейро-Бэкенд', d: 'Распределенные нейронные сети анализируют Big Data для персонального опыта.', ic: Cpu},
             {t: 'IoT Среда', d: 'Протокол Matter объединяет весь отель в единую шину данных.', ic: Globe}
           ]" :key="i" class="p-12 rounded-[50px] bg-white/5 border border-white/5 hover:border-accent/30 transition-all group backdrop-blur-md">
            <component :is="item.ic" class="text-accent mb-8 w-14 h-14 group-hover:scale-110 transition-transform" />
            <h4 class="text-2xl font-black uppercase italic mb-4">{{ item.t }}</h4>
            <p class="text-slate-500 italic leading-loose text-sm font-medium">{{ item.d }}</p>
          </div>
        </div>
      </section>

      <!-- ГАЛЕРЕЯ С ВОЗМОЖНОСТЬЮ ОТКРЫТИЯ -->
      <TheGallery @open-lightbox="(img: string) => lightboxImg = img" />
    </main>

    <!-- КАРТА ТРЕНДОВ (80/20) -->
    <section v-if="currentPage === 'map'" class="pt-40 pb-32 max-w-[1750px] mx-auto px-6 lg:px-12 animate-in slide-in-from-bottom-10">
      <div class="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 text-center lg:text-left">
        <h2 class="text-5xl md:text-8xl font-black italic uppercase text-accent tracking-tighter leading-none italic uppercase">
          Tech Roadmap<br><span class="opacity-25 text-white italic">2030</span>
        </h2>
        <p class="max-w-md text-slate-500 italic text-sm lg:text-right font-medium">Анализ технологий, которые изменят индустрию туризма в Турции, Египте и Абхазии.</p>
      </div>

      <div class="grid lg:grid-cols-10 gap-10 items-start">
        <div class="lg:col-span-8 sticky top-40 cursor-zoom-in group" @click="lightboxImg = selectedTrend.mainImage">
          <div class="relative rounded-[60px] overflow-hidden border border-white/10 aspect-video shadow-2xl bg-slate-900">
            <Transition name="fade" mode="out-in">
              <img :src="selectedTrend.mainImage" :key="selectedTrend.id" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Trend" />
            </Transition>
            <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent p-12 flex flex-col justify-end">
              <div class="flex items-center gap-3 text-accent mb-6 opacity-60 text-[10px] font-black uppercase italic tracking-widest"><Maximize2 class="w-4 h-4" /> Увеличить изображение</div>
              <h3 class="text-5xl md:text-7xl font-black italic uppercase text-accent mb-8 tracking-tighter leading-none italic uppercase">{{ selectedTrend.title }}</h3>
              <p class="text-slate-200 max-w-3xl text-xl font-medium italic leading-relaxed">{{ selectedTrend.impact }}</p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-2 space-y-3">
          <TechCard v-for="t in trends" :key="t.id" :trend="t" :isActive="selectedTrend.id === t.id" :icon="icons[t.icon]" @mouseenter="selectedTrend = t" @click="openDetails(t)" />
        </div>
      </div>
    </section>

    <!-- СХЕМА СВЯЗЕЙ (ОБНОВЛЕННЫЙ ВИД, ЧТОБЫ ТЕКСТ ВЛЕЗАЛ) -->
    <section v-if="currentPage === 'scheme'" class="pt-40 pb-32 max-w-7xl mx-auto px-10 animate-in zoom-in-95">
      <div class="text-center mb-24">
        <h2 class="text-6xl md:text-8xl font-black italic text-accent uppercase mb-6 tracking-tighter italic uppercase">СЕТЬ ИННОВАЦИЙ</h2>
        <p class="text-slate-500 italic max-w-2xl mx-auto uppercase text-[10px] tracking-[0.4em]">Цифровая экосистема отеля будущего</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
        <div v-for="t in trends" :key="t.id" @click="openDetails(t)"
             class="group relative flex flex-col p-10 bg-white/5 backdrop-blur-md border border-white/5 rounded-[50px] hover:border-accent transition-all duration-500 cursor-pointer shadow-2xl overflow-hidden h-full">
          <div class="gold-gradient w-16 h-16 rounded-3xl mb-10 flex items-center justify-center text-black group-hover:rotate-12 transition-transform shadow-xl">
            <component :is="icons[t.icon]" class="w-8 h-8" />
          </div>
          <div class="flex-grow">
            <div class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-2 italic">Модуль 0{{t.id}}</div>
            <!-- break-words и hyphens-auto для исправления текста -->
            <h4 class="text-xl md:text-2xl font-black italic uppercase mb-6 leading-tight break-words hyphens-auto transition-colors group-hover:text-white">{{ t.title }}</h4>
            <p class="text-xs text-slate-500 italic mb-8 leading-relaxed">{{ t.description }}</p>
          </div>
          <button class="text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-3 italic group-hover:gap-5 transition-all">
            Спецификация <ArrowRight class="w-3 h-3"/>
          </button>
        </div>
      </div>
    </section>

    <!-- МОДАЛКА: ТЕХНИЧЕСКИЕ ДЕТАЛИ -->
    <Transition name="fade">
      <div v-if="isDetailOpen" class="fixed inset-0 z-[600] flex items-center justify-center p-4 backdrop-blur-3xl bg-black/95">
        <div class="bg-[#0a0a0a] border border-white/10 p-10 md:p-16 rounded-[60px] max-w-3xl w-full relative shadow-2xl">
          <button @click="isDetailOpen = false" class="absolute top-10 right-10 text-slate-500 hover:text-white transition-colors"><X class="w-8 h-8" /></button>
          <div class="text-accent font-black uppercase tracking-[0.5em] text-[10px] mb-10 italic flex items-center gap-6">
            <div class="w-12 h-px bg-accent/30 font-black italic uppercase italic uppercase"></div> ТЕХНИЧЕСКАЯ СПЕЦИФИКАЦИЯ
          </div>
          <h3 class="text-4xl md:text-6xl font-black italic uppercase mb-10 text-white tracking-tighter leading-none italic uppercase">{{ selectedTrend.title }}</h3>
          <p class="bg-white/5 p-10 rounded-[45px] border border-white/5 italic leading-loose text-slate-300 text-sm font-medium">
            {{ selectedTrend.implementation }}
          </p>
        </div>
      </div>
    </Transition>

    <TheFooter />
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
@keyframes subtle-zoom { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
.animate-subtle-zoom { animation: subtle-zoom 30s infinite alternate ease-in-out; }
</style>

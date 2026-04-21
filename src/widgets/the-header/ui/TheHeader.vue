<script setup lang="ts">
import { ref, watch } from 'vue'
import { Menu, X } from 'lucide-vue-next'

defineProps<{ currentPage: string }>()
const emit = defineEmits(['change-page', 'open-booking'])

const isMenuOpen = ref(false)

const navItems = [
  { id: 'home', label: 'О проекте' },
  { id: 'map', label: 'Технологии' },
  { id: 'scheme', label: 'Карта' },
  { id: 'invest', label: 'Партнерство' }
]

const navigate = (id: string) => {
  emit('change-page', id)
  isMenuOpen.value = false
}

const openBooking = () => {
  emit('open-booking')
  isMenuOpen.value = false
}

watch(isMenuOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : 'auto'
})
</script>

<template>
  <nav class="fixed top-0 w-full z-[200] backdrop-blur-md border-b border-white/5 bg-black/40">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

      <div class="flex items-center gap-3 cursor-pointer relative z-[210]" @click="navigate('home')">
        <div class="w-7 h-7 border border-accent rotate-45 flex items-center justify-center">
          <div class="w-1 h-1 bg-accent -rotate-45"></div>
        </div>
        <span class="text-xs font-light tracking-[0.5em] uppercase sm:block hidden">
          Nova <span class="text-accent font-bold">Horizon</span>
        </span>
      </div>

      <div class="hidden lg:flex items-center gap-10">
        <button v-for="item in navItems" :key="item.id" @click="navigate(item.id)"
                class="text-[9px] uppercase tracking-[0.5em] transition-all relative group"
                :class="currentPage === item.id ? 'text-accent' : 'text-slate-400 hover:text-white'">
          {{ item.label }}
          <span class="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all" :class="{'w-full': currentPage === item.id}"></span>
        </button>
      </div>

      <div class="flex items-center gap-4 relative z-[210]">
        <button
          @click="openBooking"
          class="hidden lg:block border border-accent text-accent px-8 py-3 text-[9px] font-black uppercase tracking-[0.3em] rounded-full transition-all duration-500 hover:bg-accent hover:text-black hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
        >
          Book Now
        </button>

        <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden text-white p-2 relative z-[220]">
          <Menu v-if="!isMenuOpen" class="w-7 h-7" />
          <X v-else class="w-7 h-7 text-accent" />
        </button>
      </div>
    </div>
  </nav>

  <Transition name="menu-fade">
    <div v-if="isMenuOpen" class="mobile-overlay">
      <div class="relative z-10 h-full flex flex-col justify-between px-8 py-24">
        <div class="flex flex-col gap-6">
          <button v-for="item in navItems" :key="item.id" @click="navigate(item.id)"
                  class="text-3xl sm:text-5xl font-thin uppercase tracking-[0.1em] text-left transition-all"
                  :class="currentPage === item.id ? 'text-accent border-l-2 border-accent pl-6' : 'text-white/20 pl-0'">
            {{ item.label }}
          </button>
        </div>
        <div class="w-full space-y-8 pb-10">
          <button @click="openBooking" class="w-full gold-gradient py-6 rounded-full text-black font-black uppercase tracking-[0.3em] text-[11px] shadow-2xl">
            Check Availability
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.mobile-overlay {
  position: fixed; inset: 0; width: 100%; height: 100vh;
  background-color: #050505 !important;
  z-index: 150; overflow-y: auto;
}
.menu-fade-enter-active, .menu-fade-leave-active { transition: all 0.5s ease; }
.menu-fade-enter-from, .menu-fade-leave-to { opacity: 0; filter: blur(10px); transform: translateY(10px); }
</style>

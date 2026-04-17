<script setup lang="ts">
defineProps(['currentPage'])
defineEmits(['changePage', 'openBooking'])
</script>

<template>
  <nav class="fixed top-0 w-full z-[100] backdrop-blur-2xl border-b border-white/5 bg-black/40">
    <div class="max-w-7xl mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-3 cursor-pointer group" @click="$emit('changePage', 'home')">
        <div class="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-transform group-hover:rotate-12">
          <div class="w-1.5 h-1.5 bg-black rounded-full animate-ping"></div>
        </div>
        <span class="text-xl md:text-2xl font-black tracking-tighter uppercase italic transition-colors group-hover:text-gold-500">
          NOVA <span class="text-white/40 group-hover:text-white transition-colors">HORIZON</span>
        </span>
      </div>

      <!-- Nav (Desktop) -->
      <div class="hidden lg:flex items-center gap-10">
        <button v-for="(label, page) in {home: 'Отель', map: 'Тренды 2030', scheme: 'Схема связей'}"
                :key="page"
                @click="$emit('changePage', page)"
                class="relative text-[10px] font-black uppercase tracking-[0.4em] transition-all pb-1"
                :class="currentPage === page ? 'text-gold-500 border-b-2 border-gold-500' : 'text-slate-500 hover:text-white'"
        >
          {{ label }}
        </button>
      </div>

      <!-- Booking Button -->
      <button @click="$emit('openBooking')"
              class="gold-gradient text-black text-[10px] font-black uppercase tracking-[0.2em] px-6 md:px-10 py-3 md:py-4 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:scale-105 active:scale-95 transition-all">
        Забронировать
      </button>
    </div>
  </nav>
</template>

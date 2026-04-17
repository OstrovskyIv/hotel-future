<script setup lang="ts">
// Событие для открытия лайтбокса
defineEmits(['open-lightbox'])
</script>

<template>
  <section class="py-32 px-6 max-w-7xl mx-auto">
    <div class="flex items-center gap-6 mb-16">
      <div class="w-16 h-1 bg-accent shadow-[0_0_20px_var(--color-accent)]"></div>
      <h2 class="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">Визуализация Nova Horizon</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <!-- Главное фото -->
      <div
        @click="$emit('open-lightbox', '/hotel.png')"
        class="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[50px] border border-white/10 cursor-zoom-in"
      >
        <img src="/hotel.png" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Main View" />
        <div class="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all"></div>
        <div class="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-black uppercase tracking-widest bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">Просмотр</div>
      </div>

      <!-- Остальные фото из интернета (Trends) -->
      <div
        v-for="i in [1, 2, 3, 4]"
        :key="i"
        @click="$emit('open-lightbox', `/${i}.jpg`)"
        class="relative group overflow-hidden rounded-[40px] border border-white/10 aspect-square cursor-zoom-in"
      >
        <img :src="`/${i}.jpg`" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Detail" />
        <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all"></div>
      </div>
    </div>
  </section>
</template>

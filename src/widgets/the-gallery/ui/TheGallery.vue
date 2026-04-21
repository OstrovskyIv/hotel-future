<script setup lang="ts">
defineEmits(['open-lightbox'])

const photos = [
  {id: 1, url: '/tech-1.webp', label: 'Smart Interior'},
  {id: 2, url: '/tech-2.webp', label: 'Robotic Service'},
  {id: 3, url: '/tech-3.webp', label: 'AI Concierge'},
  {id: 4, url: '/tech-pool.webp', label: 'Zero-G Pool'},
  {id: 5, url: '/tech-5.webp', label: 'Gravity Spa'},
  {id: 6, url: '/location-tokyo.webp', label: 'Tokyo Node'},
  {id: 7, url: '/tech-restaurant.webp', label: 'Digital Dining'},
  {id: 8, url: '/location-dubai.webp', label: 'Dubai Oasis'},
  {id: 9, url: '/tech-yoga.webp', label: 'Neuro Wellness'},
  {id: 10, url: '/tech-7.webp', label: 'Molecular Bar'},
  {id: 11, url: '/tech-drone.webp', label: 'Drone Delivery'},
  {id: 12, url: '/hotel-main.webp', label: 'Exterior'}
]
</script>

<template>
  <section class="py-40 px-6 max-w-7xl mx-auto">
    <div class="mb-16 flex justify-between items-end">
      <div>
        <h2 class="text-accent text-[10px] uppercase tracking-[0.5em] mb-4">Visual Experience</h2>
        <h3 class="text-4xl font-thin uppercase tracking-tighter">Галерея Nova Horizon</h3>
      </div>
      <div class="text-[10px] text-slate-500 uppercase tracking-widest pb-2">12 Shots / 2030 Edition</div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="p in photos" :key="p.id"
           @click="$emit('open-lightbox', p.url)"
           class="relative group aspect-square overflow-hidden rounded-[32px] glass-card cursor-zoom-in">
        <img :src="p.url" class="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="absolute bottom-6 left-6 text-[8px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">{{ p.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits(['open-lightbox'])

const photos = [
  { id: 1, url: 'hotel-main.webp', label: 'Main Exterior' },
  { id: 2, url: 'location-dubai.webp', label: 'Dubai Node' },
  { id: 3, url: 'location-tokyo.webp', label: 'Tokyo Node' },
  { id: 4, url: 'tech-pool.webp', label: 'Infinity Pool' },
  { id: 5, url: 'tech-5.webp', label: 'Water Therapy' },
  { id: 6, url: 'tech-7.webp', label: 'Digital Dining' },
  { id: 7, url: 'tech-8.webp', label: 'Sky Lift' },
  { id: 8, url: 'tech-yoga.webp', label: 'Neuro Wellness' },
  { id: 9, url: 'tech-drone.webp', label: 'Service Drone' },
  { id: 10, url: 'tech-4.webp', label: 'Biometric Access' },
  { id: 11, url: 'room-map.webp', label: 'Floor Plan' },
  { id: 12, url: 'hotel-main.webp', label: 'Nova Horizon' }
]
</script>

<template>
  <section class="py-40 px-6 max-w-7xl mx-auto text-left">
    <div class="mb-16 flex justify-between items-end">
      <div>
        <h2 class="text-accent text-[10px] uppercase tracking-[0.5em] mb-4">Visual Experience</h2>
        <h3 class="text-4xl font-thin uppercase tracking-tighter text-white">Галерея Nova Horizon</h3>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="p in photos" :key="p.id"
           @click="$emit('open-lightbox', p.url)"
           class="relative group aspect-square overflow-hidden rounded-[32px] glass-card cursor-zoom-in">
        <img :src="p.url" class="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" :alt="p.label" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        <div class="absolute bottom-6 left-6 text-[8px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 text-white">
          {{ p.label }}
        </div>
      </div>
    </div>
  </section>
</template>

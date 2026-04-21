<script setup lang="ts">
import { Zap, Moon, Sparkles } from 'lucide-vue-next'

defineProps<{ activeMood: string }>()
const emit = defineEmits<{
  (e: 'update-mood', moodId: string): void
}>()

const moods = [
  { id: 'neon', name: 'Киберпанк', color: '#00f2ff', icon: Zap },
  { id: 'gold', name: 'Премиум', color: '#d4af37', icon: Sparkles },
  { id: 'minimal', name: 'Дзен', color: '#ffffff', icon: Moon }
] as const;
</script>

<template>
  <div class="p-6 md:p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-md">
    <h4 class="text-[9px] font-black uppercase tracking-[0.4em] mb-8 italic text-center text-slate-500">
      Конфигуратор атмосферы
    </h4>
    <div class="flex justify-around gap-4 md:gap-8">
      <button
        v-for="mood in moods"
        :key="mood.id"
        @click="emit('update-mood', mood.id)"
        class="flex flex-col items-center gap-3 transition-all group"
        :class="activeMood === mood.id ? 'scale-110' : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100'"
      >
        <div
          class="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center border border-white/10 transition-all shadow-2xl"
          :style="activeMood === mood.id ? `background: ${mood.color}20; border-color: ${mood.color}; box-shadow: 0 0 20px ${mood.color}30` : ''"
        >
          <component
            :is="mood.icon"
            class="w-5 h-5 md:w-6 md:h-6"
            :style="activeMood === mood.id ? `color: ${mood.color}` : ''"
          />
        </div>
        <span
          class="text-[8px] font-black uppercase tracking-widest transition-colors"
          :class="activeMood === mood.id ? 'text-white' : 'text-slate-600'"
        >
          {{ mood.name }}
        </span>
      </button>
    </div>
  </div>
</template>

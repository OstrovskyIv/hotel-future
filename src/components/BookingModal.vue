<script setup lang="ts">
import { ref, computed } from 'vue'
import { X, Search, Star, Zap } from 'lucide-vue-next'
import { futureHotels } from '../data/trends'

defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close'])

const searchQuery = ref('')
const filteredHotels = computed(() =>
  futureHotels.filter(h => h.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
)
</script>

<template>
  <Transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-[500] flex items-center justify-center p-4 backdrop-blur-3xl bg-black/90">
      <div class="bg-[#0a0a0a] border border-white/10 p-10 rounded-[50px] max-w-2xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh]">
        <button @click="emit('close')" class="absolute top-8 right-8 text-slate-500 hover:text-white"><X /></button>

        <h3 class="text-3xl font-black italic uppercase mb-8">AI-Подбор Отеля</h3>

        <!-- Поиск -->
        <div class="relative mb-10">
          <Search class="absolute left-6 top-1/2 -translate-y-1/2 text-gold-500 w-5 h-5" />
          <input v-model="searchQuery" type="text" placeholder="Поиск по локациям будущего..."
                 class="w-full bg-white/5 border border-white/10 p-6 pl-16 rounded-3xl outline-none focus:border-gold-500 transition-all italic">
        </div>

        <!-- Рекомендации -->
        <div class="space-y-4">
          <div v-for="hotel in filteredHotels" :key="hotel.id"
               class="p-6 rounded-[35px] bg-white/5 border border-white/5 flex items-center justify-between group hover:bg-white/10 transition-all cursor-pointer">
            <div>
              <div class="flex items-center gap-3 mb-1">
                <span class="text-sm font-black italic uppercase">{{ hotel.name }}</span>
                <span v-if="hotel.status === 'Открыто'" class="text-[8px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full uppercase tracking-widest">Active</span>
              </div>
              <div class="text-[10px] text-slate-500 uppercase tracking-widest italic">{{ hotel.country }}</div>
            </div>
            <div class="text-right">
              <div class="flex items-center gap-2 text-gold-500 mb-1">
                <Zap class="w-3 h-3 fill-current" />
                <span class="text-xs font-black">{{ hotel.match }}% Match</span>
              </div>
              <div class="text-[8px] text-slate-600 uppercase">AI Recommendation</div>
            </div>
          </div>
        </div>

        <button class="w-full gold-gradient p-6 rounded-3xl text-black font-black uppercase tracking-widest text-[10px] mt-10 shadow-xl">
          Сформировать цифровой ключ
        </button>
      </div>
    </div>
  </Transition>
</template>

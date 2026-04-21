<script setup lang="ts">
import { ref, watch } from 'vue'
import { X, Users, Calendar, CheckCircle, Flame } from 'lucide-vue-next'
import { futureHotels } from '@/entities/trend'

const props = defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close'])

const isSubmitted = ref(false)
const guests = ref(2)
const selectedHotelId = ref(futureHotels[0]?.id || 1)

const viewersMap = ref<Record<number, number>>({})

const generateViewers = () => {
  futureHotels.forEach(hotel => {
    viewersMap.value[hotel.id] = Math.floor(Math.random() * (95 - 12 + 1) + 12)
  })
}

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    generateViewers()
    isSubmitted.value = false
  }
})

const getOccupancy = (id: number) => (id * 17 % 25) + 70

const handleBooking = () => {
  isSubmitted.value = true
  setTimeout(() => {
    isSubmitted.value = false
    emit('close')
  }, 3000)
}
</script>

<template>
  <Transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-[1000] flex items-center justify-center p-4 backdrop-blur-3xl bg-black/90">
      <div class="glass-card p-6 md:p-12 max-w-2xl w-full relative max-h-[95vh] overflow-y-auto border-white/10">

        <div v-if="!isSubmitted">
          <div class="flex justify-between items-start mb-10 text-left">
            <div>
              <h3 class="text-2xl md:text-3xl font-thin uppercase tracking-[0.2em] text-white">Резервирование</h3>

              <Transition name="slide-up" mode="out-in">
                <div :key="selectedHotelId" class="flex items-center gap-2 mt-2">
                  <Flame class="w-3 h-3 text-orange-500 animate-pulse" />
                  <span class="text-[9px] text-orange-200/50 uppercase tracking-widest font-black">
                    {{ viewersMap[selectedHotelId] || 24 }} человека смотрят этот вариант сейчас
                  </span>
                </div>
              </Transition>
            </div>
            <button @click="emit('close')" class="p-2 text-white/40 hover:text-accent transition-colors">
              <X class="w-6 h-6" />
            </button>
          </div>

          <div class="space-y-6">
            <div class="grid gap-3">
              <div v-for="h in futureHotels" :key="h.id"
                   @click="selectedHotelId = h.id"
                   class="p-4 rounded-2xl border transition-all duration-500 cursor-pointer flex justify-between items-center group text-left"
                   :class="selectedHotelId === h.id
                  ? 'border-accent bg-accent/5 shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                  : 'border-white/5 bg-white/5 hover:border-accent/40'"
              >
                <div>
                  <div class="text-sm font-bold uppercase tracking-widest transition-colors"
                       :class="selectedHotelId === h.id ? 'text-accent' : 'text-white'">
                    {{ h.name }}
                  </div>
                  <div class="text-[10px] text-slate-500 mt-1 uppercase tracking-tighter">{{ h.country }}</div>
                </div>
                <div class="text-right">
                  <div class="text-[10px] font-black text-accent">{{ getOccupancy(h.id) }}% Заполнено</div>
                  <div class="text-[8px] text-slate-600 uppercase mt-1 tracking-widest">Live Status</div>
                </div>
              </div>
            </div>

            <!-- ПАРАМЕТРЫ -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-white/5 border border-white/10 p-5 rounded-3xl flex justify-between items-center">
                <div class="flex items-center gap-3">
                  <Users class="w-4 h-4 text-slate-500" />
                  <span class="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Гости</span>
                </div>
                <div class="flex items-center gap-6">
                  <button @click="guests > 1 && guests--" class="text-accent text-xl hover:scale-125 transition-transform">-</button>
                  <span class="font-bold w-4 text-white text-center">{{ guests }}</span>
                  <button @click="guests++" class="text-accent text-xl hover:scale-125 transition-transform">+</button>
                </div>
              </div>
              <div class="bg-white/5 border border-white/10 p-5 rounded-3xl flex justify-between items-center text-left">
                <div class="flex items-center gap-3">
                  <Calendar class="w-4 h-4 text-accent" />
                  <span class="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Дата</span>
                </div>
                <div class="text-white font-bold text-xs uppercase tracking-tighter">12/05/2030</div>
              </div>
            </div>

            <button @click="handleBooking"
                    class="w-full gold-gradient p-6 rounded-full text-black font-black uppercase tracking-[0.4em] text-[11px] shadow-[0_15px_40px_rgba(212,175,55,0.2)] hover:scale-[1.02] active:scale-95 transition-all">
              Запросить доступ в NovaOS
            </button>
          </div>
        </div>

        <div v-else class="text-center py-20 animate-in zoom-in-95">
          <CheckCircle class="w-20 h-20 text-accent mx-auto mb-8 animate-bounce" />
          <h4 class="text-3xl font-light uppercase tracking-[0.2em] mb-4 text-white">Запрос принят</h4>
          <p class="text-slate-500 text-[10px] uppercase tracking-[0.3em] leading-loose">
            Искусственный интеллект подбирает<br>оптимальный слот для вашего визита.
          </p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from { opacity: 0; transform: translateY(5px); }
.slide-up-leave-to { opacity: 0; transform: translateY(-5px); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>

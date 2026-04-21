<template>
  <div class="pt-24 md:pt-40 pb-32 max-w-7xl mx-auto px-4 md:px-6 text-center">
    <h2 class="text-accent text-[10px] uppercase tracking-[0.5em] mb-4 font-black">Floor Plan</h2>
    <h3 class="text-3xl md:text-5xl font-thin uppercase mb-12 md:mb-20 tracking-tighter text-white">Карта этажей</h3>

    <div class="glass-card p-2 md:p-4 relative overflow-hidden border-white/10 bg-white/5 rounded-[40px] md:rounded-[60px]">

      <div class="lg:hidden absolute top-6 right-6 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 animate-pulse">
        <span class="text-[8px] uppercase tracking-widest text-accent font-bold">Swipe to explore</span>
      </div>

      <div class="overflow-x-auto lg:overflow-visible no-scrollbar">
        <div class="relative min-w-[800px] lg:min-w-0">

          <img
            src="/room-map.webp"
            class="w-full h-auto rounded-[30px] md:rounded-[45px] opacity-60 transition-all duration-1000"
            alt="Hotel Interior Map"
          />

          <div class="absolute top-[30%] left-[45%] flex flex-col items-center">
            <div class="w-3 h-3 md:w-4 md:h-4 bg-accent rounded-full animate-ping"></div>
            <div class="mt-4 bg-black/80 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 text-[8px] md:text-[10px] uppercase tracking-widest text-accent font-bold whitespace-nowrap shadow-2xl">
              Penthouse 01 (Luxe)
            </div>
          </div>

          <div class="absolute top-[60%] left-[25%] flex flex-col items-center">
            <div class="w-3 h-3 md:w-4 md:h-4 bg-accent rounded-full animate-ping"></div>
            <div class="mt-4 bg-black/80 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 text-[8px] md:text-[10px] uppercase tracking-widest text-accent font-bold whitespace-nowrap shadow-2xl">
              Neural Spa Center
            </div>
          </div>

          <div class="absolute top-[15%] left-[70%] flex flex-col items-center">
            <div class="w-3 h-3 md:w-4 md:h-4 bg-accent rounded-full animate-ping"></div>
            <div class="mt-4 bg-black/80 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 text-[8px] md:text-[10px] uppercase tracking-widest text-accent font-bold whitespace-nowrap shadow-2xl">
              Quantum Sky Bar
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="(stat, i) in [
        {l: 'Доступно', v: '4 Номера'},
        {l: 'Занято', v: '84%'},
        {l: 'Климат', v: '22°C'},
        {l: 'NovaOS', v: 'Online'}
      ]" :key="i" class="glass-card p-6 border-white/5 hover:border-accent/20 transition-colors">
        <div class="text-[8px] uppercase tracking-[0.3em] text-slate-500 mb-2">{{ stat.l }}</div>
        <div class="text-sm md:text-xl font-light text-accent uppercase tracking-widest">{{ stat.v }}</div>
      </div>
    </div>
  </div>
</template>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

<script lang="ts">
	import { base } from '$app/paths';
  import { ArrowRight, CheckCircle2, Zap, Sprout } from 'lucide-svelte';
</script>

<section class="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-32">
  <div class="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 pointer-events-none">
    <div class="aspect-square w-[600px] rounded-full bg-gradient-to-tr from-[#2ECC71] to-[#0066FF]"></div>
  </div>

  <div class="max-w-7xl mx-auto px-6 relative z-10">
    <div class="grid lg:grid-cols-12 gap-16 items-center">
      
      <div class="lg:col-span-7">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/20 text-[#2ECC71] text-xs font-bold uppercase tracking-widest mb-8">
          <Sprout size={14} />
          <span>El aliado del productor peruano</span>
        </div>

        <h1 class="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8">
          Financiamos <br />
          <span class="text-[#0066FF]">tu esfuerzo,</span> <br />
          no tus papeles.
        </h1>

        <p class="text-xl lg:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
          Sabemos que el banco no entiende tus tiempos. En <strong>Chakra</strong>, tu historial es tu cosecha. Recibe insumos y capital hoy mismo para que a tu tierra no le falte nada.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-5">
          <button class="group bg-[#0066FF] text-white px-10 py-6 rounded-[2rem] font-black text-xl hover:bg-[#0052cc] transition-all hover:scale-[1.03] flex items-center justify-center gap-3 shadow-2xl shadow-blue-200">
            SOLICITAR MI CRÉDITO 
            <ArrowRight size={24} class="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a 
            href="{base}/beneficios"
            class="bg-slate-50 text-slate-700 border-2 border-slate-100 px-10 py-6 rounded-[2rem] font-bold text-xl hover:bg-white hover:border-[#2ECC71] transition-all">
            Ver beneficios
        </a>
        </div>

        <div class="mt-12 flex items-center gap-6 p-4 rounded-3xl bg-slate-50/50 border border-slate-100 w-fit">
          <div class="flex -space-x-4">
            {#each [1,2,3,4] as i}
              <img 
                src="https://i.pravatar.cc/100?img={i+10}" 
                alt="Productor" 
                class="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm"
              />
            {/each}
          </div>
          <div>
            <div class="flex items-center gap-1 text-yellow-500">
              {#each Array(5) as _} <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg> {/each}
            </div>
            <p class="text-sm font-bold text-slate-900 leading-none mt-1">
              +1,200 agricultores <span class="text-slate-500 font-medium">ya confían en nosotros</span>
            </p>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5 relative">
        <div class="relative rounded-[4rem] overflow-hidden border-[12px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]">
          <img 
            src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80" 
            alt="Agricultor exitoso" 
            class="h-[650px] w-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
        </div>

        <div class="absolute top-12 -left-12 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20 animate-bounce-slow max-w-[200px]">
          <div class="flex items-center gap-3 mb-3">
            <div class="p-2 bg-[#2ECC71]/10 rounded-lg">
              <Zap size={20} class="text-[#2ECC71]" fill="currentColor" />
            </div>
            <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Scoring Digital</span>
          </div>
          <p class="text-3xl font-black text-slate-900 tracking-tighter">94%</p>
          <p class="text-xs font-bold text-[#2ECC71]">Confianza Chakra</p>
        </div>

        <div class="absolute bottom-12 -right-8 bg-slate-900 p-6 rounded-3xl shadow-2xl border border-white/10 max-w-[220px]">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-2 h-2 rounded-full bg-[#2ECC71] animate-ping"></div>
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Estatus de Solicitud</span>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <CheckCircle2 size={16} class="text-[#2ECC71]" />
              <span class="text-sm font-bold text-white leading-none">Insumos listos</span>
            </div>
            <div class="flex items-center gap-2 opacity-50">
              <CheckCircle2 size={16} class="text-white" />
              <span class="text-sm font-medium text-white leading-none">Desembolso</span>
            </div>
          </div>
        </div>

        <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-[#2ECC71]/10 rounded-full blur-2xl"></div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .animate-bounce-slow {
    animation: bounce-slow 4s ease-in-out infinite;
  }
</style>
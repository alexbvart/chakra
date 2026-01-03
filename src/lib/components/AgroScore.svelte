<script lang="ts">
  import Satellite from 'lucide-svelte/icons/satellite';
  import ThermometerSun from 'lucide-svelte/icons/thermometer-sun';
  import BrainCircuit from 'lucide-svelte/icons/brain-circuit';
  import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';

  const layers = [
    {
      icon: Satellite,
      title: "Tu parcela en nuestra mirada",
      desc: "No necesitamos que nos cuentes cómo va tu siembra; la vemos crecer con satélites que miden el vigor de tu cultivo día a día."
    },
    {
      icon: ThermometerSun,
      title: "Anticipamos el clima contigo",
      desc: "Cruzamos años de historia de lluvias y calor en tu zona para que el clima no te tome por sorpresa. Prevenir es asegurar la cosecha."
    },
    {
      icon: BrainCircuit,
      title: "IA que entiende de campo",
      desc: "Nuestros algoritmos no ven números de cuenta, ven el esfuerzo de tus campañas pasadas y el potencial de tu tierra."
    }
  ];
</script>

<section class="py-24 bg-[#F8FAFC] relative overflow-hidden">
  <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#2ECC71]/5 to-transparent pointer-events-none"></div>
  
  <div class="max-w-7xl mx-auto px-6 relative">
    
    <div class="grid lg:grid-cols-12 gap-12 items-end mb-20">
      <div class="lg:col-span-7">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-xs font-bold uppercase tracking-widest mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]"></span>
          </span>
          Ciencia aplicada al campo
        </div>
        
        <h2 class="text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
          Miramos donde <br/>
          <span class="text-[#0066FF] inline-block relative">
            otros no ven.
            <svg class="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9C118.957 4.47226 235.167 2.02085 355 3" stroke="#2ECC71" stroke-width="5" stroke-linecap="round"/>
            </svg>
          </span>
        </h2>
      </div>
      
      <div class="lg:col-span-5 pb-2">
        <p class="text-xl text-slate-600 leading-relaxed border-l-4 border-[#2ECC71] pl-6">
          Mientras los bancos te piden papeles que no tienes, nosotros <span class="text-slate-900 font-bold">leemos tu tierra</span>. Usamos ciencia para darte el crédito que tu esfuerzo realmente merece.
        </p>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-8">
      
      <div class="lg:col-span-2 bg-white rounded-[2.5rem] shadow-sm border border-slate-200 overflow-hidden relative group">
        <div class="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
        <img 
          src="https://i.pinimg.com/736x/71/35/04/713504828c75bd67b63466bbe8554f15.jpg" 
          alt="Agricultor viendo tablet" 
          class="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        />
        
        <div class="relative z-10 p-10 h-full flex flex-col justify-between min-h-[400px]">
          <div class="bg-white/90 backdrop-blur-md p-4 rounded-2xl w-fit shadow-xl border border-white">
            <div class="flex items-center gap-4">
               <div class="w-12 h-12 bg-[#2ECC71] rounded-full flex items-center justify-center text-white shadow-lg">
                 <Satellite size={24} />
               </div>
               <div>
                 <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Escaneo de Parcela</p>
                 <p class="text-lg font-black text-slate-800 tracking-tight">Hacienda Santa Rosa</p>
               </div>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
             <div class="bg-white/95 backdrop-blur-md p-6 rounded-[2rem] shadow-xl">
                <p class="text-xs font-bold text-[#0066FF] uppercase mb-1">Tu Agro-Score</p>
                <div class="flex items-baseline gap-1">
                  <span class="text-4xl font-black text-slate-900">88</span>
                  <span class="text-slate-400 font-bold">/100</span>
                </div>
                <p class="text-xs text-slate-500 mt-2 font-medium leading-none">Apto para crédito inmediato</p>
             </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        {#each layers as item}
          <div class="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-[#2ECC71] hover:shadow-xl hover:shadow-green-900/5 transition-all group">
            <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#2ECC71] mb-6 group-hover:scale-110 transition-transform">
              <svelte:component this={item.icon} size={24} />
            </div>
            <h4 class="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
            <p class="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        {/each}
      </div>

    </div>
  </div>
</section>
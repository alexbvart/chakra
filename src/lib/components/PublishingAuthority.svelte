<script lang="ts">
  import { BookOpen, Calendar, ArrowUpRight, PlayCircle, CheckCircle2 } from 'lucide-svelte';

  const articles = [
    {
      tag: "Gestión de Riesgo",
      title: "Preparando tu tierra para El Niño: Guía de drenaje y prevención",
      desc: "Técnicas de bajo costo para proteger tus cultivos ante el exceso de lluvias.",
      img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80",
      date: "12 Mar 2024"
    },
    {
      tag: "Productividad",
      title: "5 Insumos biológicos para duplicar el rendimiento de la papa",
      desc: "Cómo la transición a bio-insumos está mejorando los márgenes de ganancia en Junín.",
      img: "https://i.pinimg.com/736x/42/3e/99/423e99173498add3ede43270b93c6770.jpg",
      date: "08 Mar 2024"
    }
  ];
</script>

<section class="py-24 bg-white">
  <div class="max-w-7xl mx-auto px-6">
    
    <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <div class="max-w-2xl">
        <div class="flex items-center gap-2 text-[#0066FF] font-bold uppercase tracking-widest text-xs mb-4">
          <BookOpen size={16} />
          <span>Academia Chakra</span>
        </div>
        <h2 class="text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tighter">
          Mucho más que <span class="text-[#2ECC71]">capital.</span>
        </h2>
        <p class="text-xl text-slate-600 mt-4 leading-relaxed">
          Compartimos la experiencia de los mejores ingenieros y productores para asegurar que cada semilla alcance su máximo potencial.
        </p>
      </div>
      
      <button class="flex items-center gap-2 font-bold text-slate-900 border-b-2 border-[#2ECC71] pb-2 hover:text-[#2ECC71] transition-colors group">
        Ver todos los artículos
        <ArrowUpRight size={20} class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>

    <div class="grid lg:grid-cols-3 gap-8">
      
      <div class="lg:col-span-2 group cursor-pointer relative overflow-hidden rounded-[3rem] bg-slate-900 h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80" 
          alt="Video educativo" 
          class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        
        <div class="absolute inset-0 flex flex-col justify-end p-10 lg:p-16">
          <div class="flex items-center gap-3 mb-6">
            <div class="bg-[#2ECC71] p-4 rounded-full text-white shadow-lg animate-pulse">
              <PlayCircle size={32} fill="currentColor" />
            </div>
            <span class="text-white font-bold tracking-widest text-xs uppercase bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              Video Tutorial: Análisis de Suelos
            </span>
          </div>
          <h3 class="text-3xl lg:text-4xl font-black text-white leading-tight max-w-xl">
            Aprende a interpretar tu análisis de suelo en 5 minutos.
          </h3>
        </div>
      </div>

      <div class="space-y-8">
        {#each articles as art}
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-[2rem] mb-4 h-48">
              <img src={art.img} alt={art.title} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-[#0066FF] uppercase tracking-tighter">
                {art.tag}
              </div>
            </div>
            <div class="flex items-center gap-2 text-slate-400 text-xs mb-2">
              <Calendar size={14} />
              {art.date}
            </div>
            <h4 class="text-xl font-bold text-slate-900 group-hover:text-[#0066FF] transition-colors leading-snug">
              {art.title}
            </h4>
            <p class="text-slate-500 text-sm mt-2 line-clamp-2">
              {art.desc}
            </p>
          </div>
        {/each}
      </div>
    </div>

    <div class="mt-20 p-8 rounded-[2.5rem] bg-[#F8FAFC] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
      <div class="flex items-center gap-6">
        <div class="h-16 w-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#2ECC71]">
          <CheckCircle2 size={32} />
        </div>
        <div>
          <p class="font-black text-slate-900 text-lg">Información Validada</p>
          <p class="text-slate-500 text-sm">Todo nuestro contenido es revisado por ingenieros agrónomos certificados.</p>
        </div>
      </div>
      <div class="flex -space-x-4">
        {#each Array(4) as _, i}
          <img 
            src={`https://i.pravatar.cc/100?img=${i+20}`} 
            alt="Ingeniero" 
            class="w-12 h-12 rounded-full border-4 border-white object-cover"
          />
        {/each}
        <div class="w-12 h-12 rounded-full border-4 border-white bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
          +12 Ing.
        </div>
      </div>
    </div>

  </div>
</section>
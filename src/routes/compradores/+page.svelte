<script lang="ts">
  import { MapPin, ShieldCheck, Star, ArrowUpRight, Leaf, Users, Globe } from 'lucide-svelte';

//   const featuredFarms = [
//     { location: "Valle Sagrado, Cusco", product: "Maíz Blanco Gigante", score: 9.8, status: "Certificado" },
//     { location: "Chanchamayo, Junín", product: "Café Geisha", score: 9.5, status: "Certificado" },
//     { location: "Huancavelica", product: "Quinua Orgánica", score: 9.2, status: "En Proceso" }
//   ];

  	import { 
		TrendingUp, 
		Truck, 
		SearchCheck, 
		BarChart, 
		ArrowRight,
		BadgeCheck
	} from 'lucide-svelte';

	let { data } = $props();



  const featuredFarms = [
    { location: "Valle Sagrado, Cusco", product: "Maíz Blanco Gigante", score: 9.8, status: "Certificado" },
    { location: "Chanchamayo, Junín", product: "Café Geisha", score: 9.5, status: "Certificado" },
    { location: "Sullana, Piura", product: "Banano Orgánico", score: 9.2, status: "Certificado" }
  ];

  const buyerSolutions = [
    {
      title: "Seguridad de Abastecimiento",
      desc: "Elimine el riesgo de 'incumplimiento de entrega'. Al financiar nosotros los insumos, aseguramos que el agricultor tenga lo necesario para cumplir su contrato con usted.",
      icon: SearchCheck,
      tag: "Supply Chain"
    },
    {
      title: "Cumplimiento Normativo (UE/EE.UU)",
      desc: "Al financiar los mismos insumos de alta tecnología para todos, garantizamos que el producto final sea homogéneo.",
      icon: BadgeCheck,
      tag: "Calidad"
    },
    {
      title: "Nuevos Orígenes Validados",
      desc: "Descubra y compre a pequeños productores familiares con historial de rendimiento verificado por nuestra tecnología.",
      icon: Globe,
      tag: "Sourcing"
    }
  ];
</script>

<main class="bg-white">
  <header class="relative pt-32 pb-24 bg-[#FCFBF9] overflow-hidden">
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/felt.png')] opacity-5"></div>
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="max-w-4xl">
        <span class="text-[#0066FF] font-black uppercase tracking-[0.3em] text-xs mb-4 block">Alianzas Institucionales</span>
        <h1 class="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
          Inyectamos <span class="text-[#0066FF]">liquidez,</span> <br />
          usted cosecha <span class="text-[#2ECC71]">certeza.</span>
        </h1>
        <p class="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
			<!-- No solo financiamos; certificamos el éxito de la campaña. Chakra conecta a los mejores productores del Perú con los compradores más exigentes del mundo. -->
          Chakra formaliza la relación entre la gran industria y el pequeño productor familiar, eliminando los cuellos de botella financieros del agro peruano.
        </p>
      </div>
    </div>
  </header>

  <section class="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <div>
        <h2 class="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
          Integración en <br />
          <span class="text-[#2ECC71]">3 simples pasos.</span>
        </h2>
        <p class="text-lg text-slate-400 mb-12">No pedimos cambios en su modelo operativo. Chakra se adapta a su cadena de suministro actual.</p>
        
        <div class="space-y-8">
          <div class="flex gap-6 items-start">
            <div class="w-12 h-12 rounded-2xl bg-[#0066FF] flex items-center justify-center font-black text-xl shrink-0">1</div>
            <div>
              <h4 class="text-xl font-bold">Referenciación</h4>
              <p class="text-slate-400">Usted nos conecta con su red actual de proveedores o asociaciones.</p>
            </div>
          </div>
          <div class="flex gap-6 items-start">
            <div class="w-12 h-12 rounded-2xl bg-[#0066FF] flex items-center justify-center font-black text-xl shrink-0">2</div>
            <div>
              <h4 class="text-xl font-bold">Calificación Agro-Score</h4>
              <p class="text-slate-400">Chakra evalúa, aprueba y entrega insumos de alta tecnología directamente al campo.</p>
            </div>
          </div>
          <div class="flex gap-6 items-start">
            <div class="w-12 h-12 rounded-2xl bg-[#0066FF] flex items-center justify-center font-black text-xl shrink-0">3</div>
            <div>
              <h4 class="text-xl font-bold">Cosecha Blindada</h4>
              <p class="text-slate-400">Usted recibe el producto con trazabilidad total y nosotros gestionamos el cobro del crédito.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10">
        <div class="flex justify-between items-center mb-10">
          <div class="flex items-center gap-3">
            <div class="w-3 h-3 rounded-full bg-[#2ECC71] animate-pulse"></div>
            <span class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Certificación Activa</span>
          </div>
          <BadgeCheck class="text-[#2ECC71]" size={24} />
        </div>
        
        <div class="space-y-6">
          <div class="p-4 bg-white/5 rounded-2xl border border-white/5">
            <div class="flex justify-between text-xs mb-2">
              <span class="text-slate-400 uppercase font-bold">Control de Pesticidas</span>
              <span class="text-[#2ECC71]">Nivel Óptimo</span>
            </div>
            <div class="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div class="h-full bg-[#2ECC71] w-[95%]"></div>
            </div>
          </div>
          <div class="p-6 bg-white/10 rounded-2xl">
            <p class="text-[10px] font-bold text-slate-400 uppercase mb-2">Proyección de Entrega</p>
            <div class="flex items-end gap-2">
              <span class="text-4xl font-black">450 TN</span>
              <span class="text-xs text-[#2ECC71] font-bold mb-1">↑ 12% vs 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



</main>

<section class="py-24 bg-[#FCFBF9]">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      
      <div class="relative">
        <div class="absolute -inset-10 bg-[#2ECC71]/5 rounded-full blur-3xl"></div>
        
        <div class="relative space-y-4">
          {#each featuredFarms as farm}
            <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#2ECC71]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 class="font-black text-slate-900 leading-none mb-1">{farm.location}</h4>
                  <p class="text-xs text-slate-500 font-bold uppercase tracking-wider">{farm.product}</p>
                </div>
              </div>
              <div class="text-right">
                <div class="flex items-center gap-1 text-amber-500 mb-1">
                  <Star size={14} fill="currentColor" />
                  <span class="text-sm font-black text-slate-900">{farm.score}</span>
                </div>
                <span class="text-[10px] font-bold px-2 py-0.5 bg-emerald-50 text-[#2ECC71] rounded-full uppercase tracking-widest">
                  {farm.status}
                </span>
              </div>
            </div>
          {/each}
        </div>

        <div class="absolute -bottom-10 -right-6 bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl max-w-[260px]">
          <div class="flex items-center gap-3 mb-4">
            <Users class="text-[#2ECC71]" size={20} />
            <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400">Impacto Social</span>
          </div>
          <p class="text-2xl font-black mb-2">+1,200</p>
          <p class="text-sm text-slate-400 leading-snug">Familias saliendo de la pobreza extrema mediante acceso a mercados globales.</p>
        </div>
      </div>

      <div>
        <div class="inline-flex items-center gap-2 text-[#2ECC71] font-black uppercase tracking-widest text-xs mb-6">
          <Leaf size={18} />
          <span>Sourcing Ético y Sostenible</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
          Expanda su red con <br /> <span class="text-[#0066FF]">riesgo cero.</span>
          <!-- Nuevos productores, <br /> <span class="text-[#0066FF]">mismo estándar.</span> -->
        </h2>
        <p class="text-xl text-slate-600 mb-10 leading-relaxed">
          Nuestra base de datos no es solo una lista; es un <strong>registro vivo de rendimiento</strong>. Encuentre nuevos productores certificados que ya utilizan tecnología Chakra y asegure su volumen de compra con un historial de trazabilidad completo.
        </p>

        <div class="grid sm:grid-cols-2 gap-6">
          <div class="flex items-start gap-3">
            <ShieldCheck class="text-[#0066FF] mt-1" size={20} />
            <p class="text-sm font-medium text-slate-700">Productores evaluados con Agro-Score.</p>
          </div>
          <div class="flex items-start gap-3">
            <ShieldCheck class="text-[#0066FF] mt-1" size={20} />
            <p class="text-sm font-medium text-slate-700">Trazabilidad de insumos garantizada.</p>
          </div>
        </div>

        <button class="mt-12 group flex items-center gap-3 text-[#0066FF] font-black text-lg hover:gap-5 transition-all">
          EXPLORAR CATÁLOGO DE PRODUCTORES <ArrowUpRight />
        </button>
      </div>

    </div>
  </div>
</section>


<main class="bg-white">

	<section class="py-24 px-6 border-t border-slate-100">
		<div class="max-w-7xl mx-auto">
			<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
				<div class="max-w-xl">
					<h2 class="text-4xl font-black text-slate-900 tracking-tight">Lo que el comprador busca, <span class="text-[#2ECC71]">Chakra lo garantiza.</span></h2>
				</div>
				<p class="text-slate-500 font-medium md:max-w-xs uppercase tracking-widest text-[10px]">
					Solucionando los cuellos de botella del agronegocio peruano.
				</p>
			</div>

			<div class="grid lg:grid-cols-3 gap-8">
				{#each buyerSolutions as sol}
					{@const Icon = sol.icon}
					<div class="p-10 rounded-[3rem] bg-[#F8FAFC] border border-slate-100 hover:border-[#0066FF]/20 hover:bg-white hover:shadow-2xl transition-all group">
						<div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#0066FF] shadow-sm mb-8 group-hover:scale-110 transition-transform">
							<Icon size={28} />
						</div>
						<span class="text-[10px] font-black text-[#2ECC71] uppercase tracking-[0.2em] mb-4 block">
							{sol.tag}
						</span>
						<h3 class="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{sol.title}</h3>
						<p class="text-slate-600 leading-relaxed mb-6">
							{sol.desc}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>


	  <section class="py-24 px-6 text-center bg-[#FCFBF9]">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter">¿Eres comprador o agroexportador?</h2>
      <p class="text-xl text-slate-500 mb-12 leading-relaxed italic">
        Asegura tu cadena de suministro hoy mismo. Únete a la red que está formalizando el campo peruano con tecnología de punta.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="bg-[#0066FF] text-white px-10 py-6 rounded-3xl font-black text-xl hover:shadow-2xl hover:shadow-blue-200 transition-all flex items-center justify-center gap-3 hover:scale-105 hover:bg-[#0052cc]">
          HABLAR CON UN DIRECTOR <ArrowRight size={20} />
        </button>
        <button class="bg-white text-slate-900 border-2 border-slate-200 px-10 py-6 rounded-3xl font-black text-xl hover:bg-slate-50 transition-all hover:scale-105 ">
          DESCARGAR BROCHURE
        </button>
      </div>
    </div>
  </section>
</main>
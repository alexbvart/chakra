<script lang="ts">
  import { 
    Zap, Coins, Sprout, ShieldCheck, TrendingUp, Users2, 
    ArrowLeft, CheckCircle2, BarChart3, Clock, MapPin 
  } from 'lucide-svelte';
  
  // Datos para la tabla comparativa (Factor clave para Stakeholders)
  const comparativa = [
    { caracteristica: "Velocidad de aprobación", chakra: "48 Horas", banco: "30-45 Días" },
    { caracteristica: "Requisitos", chakra: "Salud de la Tierra", banco: "Garantías Hipotecarias" },
    { caracteristica: "Desembolso", chakra: "Efectivo + Insumos", banco: "Solo Efectivo" },
    { caracteristica: "Asesoría Técnica", chakra: "Incluida", banco: "No disponible" }
  ];
</script>

<nav class="py-6 px-6 border-b border-slate-100 bg-white sticky top-0 z-50">
  <div class="max-w-7xl mx-auto flex justify-between items-center">
    <a href="/" class="flex items-center gap-2 text-slate-600 hover:text-[#0066FF] font-bold transition-colors">
      <ArrowLeft size={20} /> Volver al Inicio
    </a>
    <div class="text-2xl font-black italic tracking-tighter text-slate-900">CHAKRA</div>
  </div>
</nav>

<main class="bg-[#FCFBF9]">
  <section class="py-20 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
        Diseñado para el <br /> <span class="text-[#2ECC71]">crecimiento real.</span>
      </h1>
      <p class="text-xl text-slate-600 leading-relaxed">
        En Chakra hemos eliminado las barreras que te impiden crecer. Aquí te explicamos cómo transformamos cada sol invertido en una cosecha más grande.
      </p>
    </div>
  </section>

  <section class="py-12 px-6">
    <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      <div class="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
        <div class="w-14 h-14 bg-blue-50 text-[#0066FF] rounded-2xl flex items-center justify-center mb-6">
          <Clock size={30} />
        </div>
        <h3 class="text-2xl font-bold mb-4">Tiempo Récord</h3>
        <p class="text-slate-500">Sabemos que el clima no espera. Nuestro sistema basado en datos aprueba créditos mientras otros siguen pidiendo copias de DNI.</p>
      </div>
      <div class="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
        <div class="w-14 h-14 bg-green-50 text-[#2ECC71] rounded-2xl flex items-center justify-center mb-6">
          <Sprout size={30} />
        </div>
        <h3 class="text-2xl font-bold mb-4">Insumos de Élite</h3>
        <p class="text-slate-500">No solo recibes capital. Te conectamos con semillas y fertilizantes de alta tecnología que rinden un 40% más.</p>
      </div>
      <div class="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
        <div class="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
          <BarChart3 size={30} />
        </div>
        <h3 class="text-2xl font-bold mb-4">Score de Tierra</h3>
        <p class="text-slate-500">Usamos satélites y análisis de suelo para entender tu potencial. Tu garantía es tu capacidad de producir.</p>
      </div>
    </div>
  </section>

  <section class="py-24 px-6 bg-white">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-black mb-4">¿Por qué no ir al banco?</h2>
        <p class="text-slate-500">Compara la experiencia tradicional con la Revolución Chakra.</p>
      </div>

      <div class="overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-2xl">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-900 text-white">
              <th class="p-8 font-bold uppercase tracking-widest text-xs">Característica</th>
              <th class="p-8 font-bold uppercase tracking-widest text-xs text-[#2ECC71]">Modelo Chakra</th>
              <th class="p-8 font-bold uppercase tracking-widest text-xs">Banca Tradicional</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            {#each comparativa as item}
              <tr class="hover:bg-slate-50 transition-colors">
                <td class="p-8 font-bold text-slate-700">{item.caracteristica}</td>
                <td class="p-8 font-black text-slate-900">
                  <div class="flex items-center gap-2">
                    <CheckCircle2 size={18} class="text-[#2ECC71]" />
                    {item.chakra}
                  </div>
                </td>
                <td class="p-8 text-slate-400">{item.banco}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="py-24 px-6 bg-[#0066FF]">
    <div class="max-w-4xl mx-auto text-center text-white">
      <h2 class="text-4xl md:text-6xl font-black mb-8 leading-tight">
        No dejes que tu campaña se detenga por falta de visión.
      </h2>
      <button class="bg-white text-[#0066FF] px-12 py-6 rounded-[2rem] text-2xl font-black hover:scale-105 transition-transform shadow-2xl">
        EMPEZAR MI SOLICITUD AHORA
      </button>
      <p class="mt-8 text-blue-100 font-medium italic opacity-80">
        "Con Chakra, mi palabra volvió a valer en mi propia tierra."
      </p>
    </div>
  </section>
</main>
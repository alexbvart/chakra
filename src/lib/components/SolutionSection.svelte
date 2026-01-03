<script lang="ts">
  import { Sprout, Users, Shield, TrendingUp } from 'lucide-svelte';
  
  // Recibimos las props con el nuevo sistema de Runes
  let { solutions } = $props();

  // Mapeo de iconos (Mantenemos el orden que esperas en el loop)
  const icons = [Sprout, Users, Shield, TrendingUp];
</script>

<div class="max-w-7xl mx-auto px-4 py-20">
  <div class="text-center mb-16">
    <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">
      Aprendimos de los Mejores
    </h2>
    <p class="text-slate-500 text-lg">Modelos probados, adaptados a la realidad de nuestra tierra.</p>
  </div>

  <div class="grid md:grid-cols-2 gap-8">
    {#each solutions as solution, i}
      {@const Icon = icons[i]} <div class="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
        <div class="w-16 h-16 rounded-2xl bg-gradient-to-br {solution.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
          {#if Icon}
            <Icon size={32} strokeWidth={2.5} />
          {/if}
        </div>

        <h3 class="text-2xl font-black text-slate-900 mb-3 tracking-tight">{solution.title}</h3>
        <p class="text-slate-600 text-lg mb-6 leading-relaxed">{solution.description}</p>
        
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-xs font-black uppercase tracking-widest border border-emerald-100">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          {solution.model}
        </div>
      </div>
    {/each}
  </div>
</div>
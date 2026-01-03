<script lang="ts">
  import Store from 'lucide-svelte/icons/store';
  import ShoppingBag from 'lucide-svelte/icons/shopping-bag';
  import Cpu from 'lucide-svelte/icons/cpu';
	import { ArrowRight } from 'lucide-svelte';
</script>

<section class="py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-4xl font-black text-gray-900 mb-4">Un ecosistema donde todos ganan</h2>
      <p class="text-lg text-gray-600">Conectamos la cadena de valor agrícola para crear prosperidad real y sostenible.</p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div class="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-[#2ECC71] transition group">
        <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#2ECC71] group-hover:text-white transition">
          <Store size={28} />
        </div>
        <h3 class="text-2xl font-bold mb-4">AgTechs y Tiendas</h3>
        <p class="text-gray-600 mb-6">Digitaliza tus ventas. Ofrece tus insumos a agricultores con crédito asegurado por nosotros.</p>
        <a href="#aliados" class="text-[#2ECC71] font-bold flex items-center gap-2">
          Ser aliado <ArrowRight size={16} />
        </a>
      </div>

      <div class="p-8 rounded-[2rem] bg-[#0066FF] text-white shadow-2xl shadow-blue-200">
        <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
          <Cpu size={28} />
        </div>
        <h3 class="text-2xl font-bold mb-4 text-white">Agricultores</h3>
        <p class="text-blue-100 mb-6">Accede a semillas, fertilizantes y asesoría técnica basada en satélites. Pagas al cosechar.</p>
        <a href="#solicitar" class="bg-white text-[#0066FF] px-6 py-2 rounded-xl font-bold inline-block">
          Pedir Crédito
        </a>
      </div>

      <div class="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-[#0066FF] transition group">
        <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#0066FF] group-hover:text-white transition">
          <ShoppingBag size={28} />
        </div>
        <h3 class="text-2xl font-bold mb-4">Compradores Finales</h3>
        <p class="text-gray-600 mb-6">Compra directamente en origen. Trazabilidad total y apoyo directo a familias rurales.</p>
        <a href="#comprar" class="text-[#0066FF] font-bold flex items-center gap-2">
          Ver Cosechas <ArrowRight size={16} />
        </a>
      </div>
    </div>
  </div>
</section>
<script lang="ts">
  import Sprout from 'lucide-svelte/icons/sprout';
  import Menu from 'lucide-svelte/icons/menu';
  import X from 'lucide-svelte/icons/x';

  let menuOpen = $state(false);
</script>

<nav class="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
  <div class="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
    <a href="/" class="flex items-center gap-2">
      <div class="w-10 h-10 bg-[#2ECC71] rounded-xl flex items-center justify-center shadow-lg shadow-green-200">
        <Sprout class="text-white" size={24} />
      </div>
      <span class="text-2xl font-black text-[#0066FF] tracking-tighter">CHAKRA</span>
    </a>

    <div class="hidden lg:flex items-center gap-8">
      <div class="flex gap-6 text-sm font-medium text-gray-600">
        <a href="#agricultores" class="hover:text-[#2ECC71] transition">Soy Agricultor</a>
        <a href="/aliados" class="hover:text-[#2ECC71] transition">Tiendas y AgTechs</a>
        <a href="/compradores" class="hover:text-[#2ECC71] transition">Compradores</a>
      </div>
      <a href="/ruta" class="bg-[#0066FF] text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
        Acceso App
      </a>
    </div>

    <button class="lg:hidden text-[#0066FF]" onclick={() => menuOpen = !menuOpen}>
      {#if menuOpen} <X /> {:else} <Menu /> {/if}
    </button>
  </div>
</nav>
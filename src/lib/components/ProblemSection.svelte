<script lang="ts">
  let { problems } = $props();
</script>

<div class="max-w-7xl mx-auto px-4 py-20">
  <div class="text-center mb-16">
    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Conocemos Tu Lucha Diaria</h2>
    <p class="text-xl text-gray-600 max-w-2xl mx-auto">Sabemos que el sistema actual está roto.</p>
  </div>

  <div class="grid md:grid-cols-2 gap-8">
    {#each problems as problem}
      <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
        <div class="text-5xl mb-4">{problem.icon}</div>
        <h3 class="text-2xl font-bold text-gray-900 mb-3">{problem.title}</h3>
        <p class="text-gray-700 text-lg">{problem.description}</p>
      </div>
    {/each}
  </div>
</div>
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: '404.html' // Esto evita errores al recargar la página
    }),
    paths: {
      // Si tu URL es usuario.github.io/repo, pon '/repo' aquí. 
      // Si es dominio propio, déjalo vacío ''
      base: process.env.NODE_ENV === 'production' ? '/tu-nombre-de-repo' : '',
    }
  }
};
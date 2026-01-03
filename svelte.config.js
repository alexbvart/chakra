import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // El fallback '404.html' permite que GitHub Pages maneje las rutas
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: false // ESTO ES CLAVE: Desactiva la revisión estricta de rutas
    }),
    paths: {
      // Pon el nombre de tu repo aquí
      base: process.env.NODE_ENV === 'production' ? '/chakra' : '',
    },
    prerender: {
      handleHttpError: 'ignore', // Ignora cualquier error de links (/, /aliados, etc)
      handleMissingId: 'ignore'
    }
  }
};

export default config;
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    // Désactivation explicite des sourcemaps en production (Sécurité anti-exposition de code source)
    sourcemap: false,
    minify: 'esbuild'
  }
});

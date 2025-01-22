import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Tailwind CSS Plugin Import
import tailwindcss from 'vite-plugin-tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});


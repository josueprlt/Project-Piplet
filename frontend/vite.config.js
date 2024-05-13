import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      dayjs: 'dayjs/esm', // Chemin vers le module Day.js
    },
  },
});
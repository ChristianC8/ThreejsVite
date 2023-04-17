import { defineConfig } from "vite";


export default defineConfig({
  base: '/ThreejsVite/',
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }




})
  
import { defineConfig } from "vite";
import { copy } from 'vite-plugin-copy';


export default defineConfig({
  base: '/ThreejsVite/',
  plugins: [
    copy({
      targets: [
        { src: 'FBXS/ramen.glb', dest: 'dist/FBXS' },
      ],
      hook: 'buildStart',
    }),
  ],




})
  
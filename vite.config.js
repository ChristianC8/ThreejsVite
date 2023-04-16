import { defineConfig } from "vite"


export default defineConfig({
  base: '/ThreejsVite/',
  assets: [
    './src/assets',
    './FBXS' // ruta de tu carpeta FBX
  ]
  
}) 

/* module.exports = {
  publicPath: '/ThreejsVite/'
} */
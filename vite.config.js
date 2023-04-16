import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/ThreejsVite/',
  plugins: [vue()]
}) 

module.exports = {
  publicPath: '/ThreejsVite/'
}
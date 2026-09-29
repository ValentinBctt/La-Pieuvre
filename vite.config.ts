import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [
    RubyPlugin()
  ],
  build: {
    reportCompressedSize: false
  },
  server: {
    host: '0.0.0.0',
    port: 3036,
    strictPort: true,
    watch: {
      usePolling: true,
      interval: 250
    }
  }
})
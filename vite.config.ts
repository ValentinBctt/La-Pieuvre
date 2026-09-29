import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [
    RubyPlugin()
  ],
  server: {
    host: '0.0.0.0',
    port: 3036,
    strictPort: true,
    middlewareMode: false,
    watch: {
      usePolling: true,
      interval: 250
    },
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 3036
    }
  }
})
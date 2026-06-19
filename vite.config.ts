import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [
    RubyPlugin()
  ],
  server: {
    host: 'localhost',
    port: 3036,
    strictPort: true,
    watch: {
      usePolling: true,
      interval: 250
    }
  }
})
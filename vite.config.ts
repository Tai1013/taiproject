import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dotenv from 'dotenv'

const DRIVE_LETTER_REGEX = /^[a-z]:/i
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g

process.env.VITE_APP_VERSION = process.env.npm_package_version
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(
          /<title>(.*?)<\/title>/,
          `<title>${process.env.VITE_APP_TITLE}</title>`
        )
      }
    },
    vue()
  ],
  base: process.env.VITE_APP_BASE,
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const modules = id.toString().split('node_modules/.pnpm/')[1].split('/')[0].toString()
            if (modules.indexOf('firebase') > -1) return 'firebase'
            if (modules.indexOf('fortawesome') > -1) return 'fortawesome'
            // if (modules.indexOf('chart.js') > -1) return 'chartjs'
            return 'vendor'
          }
        },
        sanitizeFileName(name) {
          const match = DRIVE_LETTER_REGEX.exec(name)
          const driveLetter = match ? match[0] : ''
          return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
        }
      }
    }
  },
  server: {
    port: 8000,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      "@": path.resolve(__dirname, 'src/')
    }
  }
})

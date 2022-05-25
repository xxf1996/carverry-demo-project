import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^@\//,
        replacement: path.resolve(__dirname, 'src') + '/'
      } // 模块路径alias
    ]
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus({
      // 这里的正则确保对@carverry的包也会进行手动导入组件且自动加载样式
      exclude: [/[/\\]node_modules[/\\](?!@carverry)/, /[/\\]\.git[/\\]/, /[/\\]\.nuxt[/\\]/]
    }),
  ],
  server: {
    open: true,
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver, VantImports } from '@vant/auto-import-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 自动按需引入 Vant 配置
    AutoImport({
      imports: [VantImports()],
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
})

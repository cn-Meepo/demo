import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path';
import viteCompression from 'vite-plugin-compression'
import viteImages from 'vite-plugin-vue-images'
import {createSvgIconsPlugin} from "vite-plugin-svg-icons"

export default defineConfig({
  plugins: [
    vue(),
    AutoImport ({
      dts: 'src/auto-imports.d.ts',
      imports: ['vue', 'vue-router','vuex'],
      resolvers: [ElementPlusResolver()],
    }),
    viteCompression({
      verbose: true,
      disable: false,
      deleteOriginFile: false, //删除源文件
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteImages({
      dirs: ['src/assets/png'],
      extensions: ['jpg','jpeg','png','svg'],
      customResolvers: [],
      customSearchRegex: '([a-zA-Z0-9]+)'
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹(路径为存放所有svg图标的文件夹不单个svg图标)
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@views': path.resolve(__dirname, './src/views'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@common': path.resolve(__dirname, './src/common'),
    },
  },
})
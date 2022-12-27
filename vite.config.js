import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import envResolver from './config';
import createVitePlugins from './config/plugins';

const envDir = resolve(__dirname, 'config/env');

export default defineConfig(({ mode, command }) => {
  return {
    ...envResolver[mode](),
    plugins: createVitePlugins(mode),
    envDir,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
  };
});

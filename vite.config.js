import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from "node:path";
import { buildSync } from "esbuild";

export default defineConfig({
  root: join(process.cwd(), "./"),
  plugins: [
    react(),
  ]
});

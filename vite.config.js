import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from "node:path";
import { buildSync } from "esbuild";

export default defineConfig({
  root: join(process.cwd(), "./"),
  plugins: [
    react(),
    {
      apply: "build",
      enforce: "post",
      transformIndexHtml() {
        buildSync({
          minify: true,
          bundle: true,
          entryPoints: [join(process.cwd(), "src", "listener.js")],
          outfile: join(process.cwd(), "dist", "listener.js"),
        });
      },
    },
  ]
});

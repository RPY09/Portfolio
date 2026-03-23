import { defineConfig } from 'vite';

// Explicitly inline an empty PostCSS config so Vite never walks up to
// any parent-directory postcss.config.* (e.g. the Tailwind config in P:\web).
export default defineConfig({
  css: {
    postcss: {
      plugins: [],  // plain CSS — no PostCSS processing needed
    },
  },
  // JSX is handled out-of-the-box by Vite 7 for .jsx files
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
});

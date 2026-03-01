/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--theme-bg)',
          surface: 'var(--theme-surface)',
          fg: 'var(--theme-fg)',
          dim: 'var(--theme-fg-dim)',
          bright: 'var(--theme-fg-bright)',
          accent: 'var(--theme-accent)',
          'accent-dim': 'var(--theme-accent-dim)',
          border: 'var(--theme-border)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
    }
  },
  plugins: [],
}

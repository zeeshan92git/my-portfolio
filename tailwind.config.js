/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#12141C',
        surface: '#1B1E29',
        surface2: '#232734',
        border: '#2B3040',
        ink: '#EDEEF2',
        muted: '#8B8FA3',
        mint: '#7CFFB2',
        amber: '#FFB454',
        rose: '#FF7A93',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

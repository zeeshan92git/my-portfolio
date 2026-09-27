/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#FBE7C9',
        surface: '#FFF9F0',
        surface2: '#F3DFC2',
        border: '#DCCDB7',
        ink: '#102820',
        muted: '#65736D',
        emerald: '#064E3B',
        champagne: '#FBE7C9',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

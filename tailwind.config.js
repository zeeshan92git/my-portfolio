/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-elevated': 'var(--surface-elevated)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'accent-subtle': 'var(--accent-subtle)',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}

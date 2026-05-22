/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#ff6b00',
          deep: '#ea580c',
          yellow: '#facc15',
          cream: '#f7f1df',
          navy: '#061122',
          ink: '#1f2937'
        }
      },
      boxShadow: {
        soft: '0 24px 70px rgba(15, 23, 42, 0.14)',
        orange: '0 18px 60px rgba(249, 115, 22, 0.28)'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "C:/Users/samue/ConcealedCareO1JS/ui/src/styles/globals.css.{js,ts,jsx,tsx,mdx}",
    "C:/Users/samue/ConcealedCareO1JS/ui/src/styles/styles.css.{js,ts,jsx,tsx,mdx}",
    "C:/Users/samue/ConcealedCareO1JS/ui/src/styles/index.css.{js,ts,jsx,tsx,mdx}",
    "C:/Users/samue/ConcealedCareO1JS/ui/src/styles/Sidebar.css.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

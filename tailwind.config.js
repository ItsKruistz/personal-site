/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Wanted Sans Std Variable", system-ui, sans-serif',
          {
            fontFeatureSettings: '"calt", "clig", "locl", "ccmp", "ss07", "cv10", "cv11"',
          },
        ],
      },
    },
  },
  plugins: [],
}


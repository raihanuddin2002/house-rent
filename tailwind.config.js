/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        linear_first: {
          "0%": {
            left: "-100%",
            width: "100%"
          },
          "100%": {
            left: "100%",
            width: "10%"
          }
        },
        linear_last: {
          "0%": {
            left: "-150%",
            width: "100%"
          },
          "100%": {
            left: "100%",
            width: "10%"
          }
        }
      },
      animation: {
        linear_before: 'linear_first 1.5s infinite ease-out',
        linear_after: 'linear_last 1.5s infinite ease-in',
      }
    },
  },
}

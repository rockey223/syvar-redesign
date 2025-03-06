/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {keyframes: {
      'ease-out-elastic': {
        '0%': { transform: 'translateY(0%)' },
        '16%': { transform: 'translateY(-132.27%)' },
        '28%': { transform: 'translateY(-86.88%)' },
        '44%': { transform: 'translateY(-104.63%)' },
        '59%': { transform: 'translateY(-98.36%)' },
        '73%': { transform: 'translateY(-100.58%)' },
        '88%': { transform: 'translateY(-99.8%)' },
        '100%': { transform: 'translateY(-100%)' },
      },
    },
    clipPath: {
      custom: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    },
    animation: {
      'ease-out-elastic': 'ease-out-elastic 1s ease-out',
    },
      gridTemplateColumns: {
        // 24 column grid
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-20': 'span 20 / span 20', // Allows col-span-20
      },
      colors: {
        blue: {
          0: "var(--color-blue-0)",
          100: "var(--color-blue-100)",
          200: "var(--color-blue-200)",
          300: "var(--color-blue-300)",
          400: "var(--color-blue-400)",
          500: "var(--color-blue-500)",
          600: "var(--color-blue-600)",
          700: "var(--color-blue-700)",
          800: "var(--color-blue-800)",
          900: "var(--color-blue-900)",
        },
        gray: {
          0: "var(--color-gray-0)",
          200: "var(--color-gray-200)",
          400: "var(--color-gray-400)",
          600: "var(--color-gray-600)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)",
        },
        yellow: {
          0: "var(--color-yellow-0)",
          100: "var(--color-yellow-100)",
          200: "var(--color-yellow-200)",
          300: "var(--color-yellow-300)",
          400: "var(--color-yellow-400)",
          500: "var(--color-yellow-500)",
          600: "var(--color-yellow-600)",
          700: "var(--color-yellow-700)",
          800: "var(--color-yellow-800)",
          900: "var(--color-yellow-900)",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gren-blue": "#22b3c1",
        "custom-white": "#f7f7f7",
        "custom-white-100": "#f0f0f0",
        "custom-white-10": "#eee",
        "link-text": "#1e1e1e",
        "text": "#afafaf"
      },
      container: {
        "mobile": "20px",
        "tablet": "40px",
        "laptop": "60px",
        "desktop": "60px"
      },
    },
    screens: {
      'mobile': "576px",
      // => @media (min-width: 576px) { ... }

      'tablet': "768px",
      // => @media (min-width: 968px) { ... }

      'laptop': "992px",
      // => @media (min-width: 992px) { ... }

      'desktop': "1200px",
      // => @media (min-width: 1200px) { ... }
    },
  },
  plugins: [],
}
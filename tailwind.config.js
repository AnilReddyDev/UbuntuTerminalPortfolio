/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        ubuntuWallpaper: "url('/src/assets/img/ubuntu-wallpaper.jpg')",
      },
      colors: {
        "t-bgc": "#320e24",
        "t-head-bg":"#222222",
        "t-green":"#279e5b",
        "t-blue":"#164384",
        "t-head-btn":"#373737"
      },
      keyframes: {
        skillProgressBar:{
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        }
      },
      animation:{
        skillProgressBar:"skillProgressBar 2s ease-in-out forwards"
      }
    },
  },
  plugins: [],
};

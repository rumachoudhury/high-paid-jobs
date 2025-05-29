// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ["class"],
//   content: [
//     "./src/app/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   safelist: ["swiper-pagination-bullet", "swiper-pagination-bullet-active"],
//   theme: {
//     extend: {
//       borderColor: {
//         border: "var(--border)",
//       },
//       // backgroundSize: {
//       //   "custom-small": "120px auto",
//       //   "custom-large": "300px auto",
//       // },
//       colors: {
//         border: "var(--border)",
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//         primary: "hsl(var(--primary))",
//         "primary-foreground": "hsl(var(--primary-foreground))",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//         floatLeft: {
//           "0%, 100%": { transform: "translateY(0px)" },
//           "50%": { transform: "translateY(-10px)" },
//         },
//         floatRight: {
//           "0%, 100%": { transform: "translateY(0px)" },
//           "50%": { transform: "translateY(-15px)" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         floatLeft: "floatLeft 6s ease-in-out infinite",
//         floatRight: "floatRight 8s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["swiper-pagination-bullet", "swiper-pagination-bullet-active"],
  theme: {
    extend: {
      borderColor: {
        border: "var(--border)",
      },
      colors: {
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        floatLeft: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatRight: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounceX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(15px)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        floatLeft: "floatLeft 6s ease-in-out infinite",
        floatRight: "floatRight 8s ease-in-out infinite",
        pulseSlow: "pulseSlow 2s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        bounceX: "bounceX 2s ease-in-out infinite",
        spinSlow: "spinSlow 8s linear infinite",
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// --------------

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ["class"], // <-- THIS LINE IS REQUIRED
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
//       colors: {
//         border: "var(--border)",
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//         primary: "hsl(var(--primary))",
//         "primary-foreground": "hsl(var(--primary-foreground))",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: {
//             height: "0",
//           },
//           to: {
//             height: "var(--radix-accordion-content-height)",
//           },
//         },
//         "accordion-up": {
//           from: {
//             height: "var(--radix-accordion-content-height)",
//           },
//           to: {
//             height: "0",
//           },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//     },
//   },
//   plugins: [],
// };

// ---------------
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
      // backgroundSize: {
      //   "custom-small": "120px auto",
      //   "custom-large": "300px auto",
      // },
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        floatLeft: "floatLeft 6s ease-in-out infinite",
        floatRight: "floatRight 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

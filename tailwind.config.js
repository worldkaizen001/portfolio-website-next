module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  images: {
    deviceSizes: [
      360, 414, 480, 576, 640, 768, 976, 1024, 1280, 1440, 1920, 2048, 3840,
    ],
    imageSizes: [
      256, 276, 320, 350, 420, 508, 648, 648, 648, 648, 648, 648, 648,
    ],
    formats: ["image/avif", "image/webp"],
  },
  theme: {
    screens: {
      "3xs": "360px",
      "2xs": "414px",
      xs: "480px",
      sm: "576px",
      md: "640px",
      lg: "768px",
      xl: "976px",
      "2xl": "1024px",
    },
    extend: {
      screens: {
        "3xl": "1280px",
        "4xl": "1440px",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};

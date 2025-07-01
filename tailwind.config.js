// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'yumi-gradient': "linear-gradient(161deg, rgba(0, 0, 0, 1) 79%, rgba(201, 242, 153, 0.44) 100%, rgba(201, 242, 153, 0.19) 100%)",
      },
      colors: {
        accent: '#C9F299',
        primary: '#FFFFFF',
        secondary: '#6C6C6C',
      },
      fontFamily: {
        times: ['"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
};

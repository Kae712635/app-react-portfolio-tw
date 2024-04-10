module.exports = {
  darkMode: "media",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this line to include any file types that might contain Tailwind classes
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#eb9130',
      secondary: '#46515a',
      tertiary: '#393839',
      text: '#535353',
      white: '#fff',
      danger: '#dc3545',
    },
    extend: {},
  },
  plugins: [],
}


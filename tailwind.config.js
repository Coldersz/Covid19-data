module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      height: {
        120: '28rem'
      }
    },
  },
  variants: {
    height: ['responsive']
  },
  plugins: [],
}

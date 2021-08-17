module.exports = {
    purge: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        screens: {
          '3xl': '1920px', // 1080p
          '4xl': '2560px', // 2k
          '5xl': '3840px' // 4k
        }
      }
    },
    variants: {
      extend: {}
    },
    plugins: []
  }
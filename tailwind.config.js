const colors = require('tailwindcss/colors')
module.exports = {
    purge: ['resources/**/*.blade.php'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        colors: {
            ...colors,
            gray: colors.gray
        },
        extend: {},
    },
    variants: {
        extend: {
            borderWidth: ['focus', 'checked', 'dark'],
            backgroundColor: ['checked'],
            borderColor: ['checked', 'focus'],
            display: ['dark'],
        },
    },
    plugins: [],
}

const colors = require('tailwindcss/colors')
module.exports = {
    purge: [
        'storage/framework/views/*.php',
        'resources/**/*.blade.php',
        'resources/**/*.js',
    ],
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

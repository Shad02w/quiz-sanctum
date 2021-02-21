const colors = require('tailwindcss/colors')
module.exports = {
    purge: [
        'resources/**/*.blade.php',
        'resources/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: 'class',
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

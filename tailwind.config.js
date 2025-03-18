/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                twinkle: 'twinkle 1.5s infinite alternate',
            },
            keyframes: {
                twinkle: {
                    '0%': { opacity: '0.2', transform: 'translateY(0px)' },
                    '100%': { opacity: '1', transform: 'translateY(-2px)' },
                },
            },
        },
    },
    plugins: [],
}

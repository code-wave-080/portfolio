/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                twinkle: 'twinkle 1.5s infinite alternate',
                'slide-wrapper-up': 'slideWrapperUp 1.5s ease-in-out forwards',
            },
            keyframes: {
                twinkle: {
                    '0%': { opacity: '0.2', transform: 'translateY(0px)' },
                    '100%': { opacity: '1', transform: 'translateY(-2px)' },
                },
                slideWrapperUp: {
                    '0%': { transform: 'translateY(0%)' },
                    '100%': { transform: 'translateY(-200vh)' },
                },
            },
        },
    },
    plugins: [],
}

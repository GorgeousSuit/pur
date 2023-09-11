/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                satoshi: ['Satoshi', 'sans-serif'],
                inter: ['Inter', 'sans-serif']
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite'
            },
            colors: {
                'primary-orange': '#FF5722'
            }
        }
    },
    plugins: []
};

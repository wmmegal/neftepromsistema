import forms from '@tailwindcss/forms';
import hamburgers from 'tailwind-hamburgers';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        container: {
            center: true,
            padding: '15px',
            screens: {
                sm: '375px',
                md: '575px',
                lg: '767px',
                xl: '1200px',
            },
        },
        colors: {
            primary: '#1752ca',
            secondary: '#696969',
            black: '#16140f',
            white: '#FFFFFF',
        },
        extend: {
            fontSize: {
                '4xl': ['40px', '1.5'],
            },
        },
    },
    plugins: [forms, hamburgers, typography],
};

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            dropShadow: {
                'custom': '0 0 15px rgba(52, 52, 52, 0.1)',
            }
        },
        container: {
            center: true,
        },
        colors: {
            'transparent': 'transparent',
            'text-dark': '#27282D',
            'text-light': '#FFFFFF',
            'bg-dark': '#0E141C',
            'bg-light': '#F8F8F8',
            'box-dark': '#202C3C',
            'box-light': '#F8F8F8',
            'purple-dark': '#9633BC',
            'purple-light': '#9D6FFF',
            'shadow-dark': '#34343425',
            'border-default': '#d0d7de',
        }
    },
    plugins: [],
}
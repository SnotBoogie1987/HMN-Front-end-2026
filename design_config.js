tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#D2F865", // Acid Lime
                "background-light": "#F5F5F5",
                "background-dark": "#000000",
                "dark-surface": "#000000",
            },
            fontFamily: {
                display: ["'Anton'", "sans-serif"],
                sans: ["'Inter'", "sans-serif"],
                mono: ["'Space Mono'", "monospace"],
            },
            spacing: {
                '128': '32rem',
            }
        },
    },
};

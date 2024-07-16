/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                noors: ["Bangers", "system-ui"],
                rubik: ["Rubik Mono One", "monospace "],
                baskervville: ["Baskervville SC", "serif"]
            }
        },
    },
    plugins: [],
}
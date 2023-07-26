/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.tsx"],
    postcss: {
        plugins: [ require("tailwindcss") ],
    }
}

module.exports = nextConfig
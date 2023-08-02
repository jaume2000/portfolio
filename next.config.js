/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ["default","en","es","fr"],
        defaultLocale: "default",
        localeDetection: false
    },
    trailingSlash: true,
}

module.exports = nextConfig

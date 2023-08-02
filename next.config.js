/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ["default","en","es","fr"],
        defaultLocale: "default",
        localeDetection: true
    }
}

module.exports = nextConfig

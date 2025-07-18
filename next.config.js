/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    webpack(config) {
        // SVG 파일은 기본 file-loader에서 제외
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg')
        )
        if (fileLoaderRule) {
            fileLoaderRule.exclude = /\.svg$/i
        }

        // SVGR 로더 추가
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig

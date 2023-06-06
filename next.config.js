/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: "@import 'styles/common/index.scss';", // 미리 정의된 변수들
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images : {
        domains : ['robohash.org', 'localhost'] // <== Domain name
    }
};

export default nextConfig;

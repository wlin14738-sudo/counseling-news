/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  serverExternalPackages: ["rss-parser"],
  webpack: (config, { isServer }) => {
    if (isServer) {
      const nodeBuiltins = [
        "crypto", "timers", "http", "https", "url", "stream", "util", "fs", "path",
        "os", "zlib", "net", "tls", "dns", "events", "buffer", "querystring",
        "assert", "child_process", "http2", "constants", "perf_hooks",
        "worker_threads", "v8", "string_decoder", "readline", "async_hooks", "module",
      ];
      config.externals = config.externals || [];
      for (const m of nodeBuiltins) config.externals.push(m);
      config.externals.push({ "rss-parser": "commonjs rss-parser" });
    }
    return config;
  },
};

export default nextConfig;

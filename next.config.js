// next.config.js
module.exports = {
    trailingSlash: true, // Use this instead of exportTrailingSlash
    output: 'export', // This enables static export mode
    images: {
      unoptimized: true, // Optional: to allow images without optimization
    },
    // Optional: configure trailing slashes for exported URLs
    exportTrailingSlash: true,
  }
  
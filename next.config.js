function mergeConfig(nextConfig = {}, userConfig = {}) {
  const mergedConfig = { ...nextConfig };

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key]) &&
      typeof userConfig[key] === 'object' &&
      !Array.isArray(userConfig[key])
    ) {
      mergedConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      mergedConfig[key] = userConfig[key];
    }
  }

  return mergedConfig;
}

// Example usage:
const nextConfig = {}; // Define your Next.js config here
const userConfig = {}; // Define your user-specific config here

export default mergeConfig(nextConfig, userConfig);

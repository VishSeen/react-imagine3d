/**
 * Remove part of a path and returns the rest
 *
 * @param {string} originalUrl The original full url or path we want to substring
 * @param {string} baseUrlToRemove The path that will be need to be removed
 * @returns The path we need
 */
export const getRelativePath = (originalUrl, baseUrlToRemove) => {
  return originalUrl.replace(baseUrlToRemove, '');
};

/* eslint-disable no-undef */
/* eslint-env node */
/**
 * Tool: get_library_info
 *
 * Returns package metadata loaded at server startup (never per-request).
 */

export default function getLibraryInfo(_input, ctx) {
  const { index, pkg } = ctx;

  const exportsMap = (pkg && typeof pkg.exports === 'object' && pkg.exports) || {};
  const subpathExports = Object.keys(exportsMap)
    .filter(key => key !== '.' && key !== './index.css')
    .sort();

  return {
    name: pkg?.name ?? null,
    version: pkg?.version ?? null,
    peerDependencies: pkg?.peerDependencies ?? {},
    subpathExports,
    cssEntry: '@1money/component-ui/index.css',
    schemaVersion: index?.schemaVersion ?? null
  };
}

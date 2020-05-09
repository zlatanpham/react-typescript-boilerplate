const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const {
  addWebpackResolve,
  override,
  addPostcssPlugins,
  useEslintRc,
  useBabelRc,
  addBundleVisualizer,
} = require('customize-cra');

module.exports = override(
  addWebpackResolve({
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  }),
  useBabelRc(),
  useEslintRc(),
  addPostcssPlugins([require('tailwindcss')('./src/tailwind.config.js')]),
  process.env.REACT_APP_BUNDLE_VISUALIZER == 1 && addBundleVisualizer(),
  rewireReactHotLoader,
);

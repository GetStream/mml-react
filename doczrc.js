export default {
  typescript: true,
  root: __dirname,
  dest: '/docs',
  base: '/mml-react',
  title: 'MML React',
  repository: 'https://github.com/GetStream/mml-react/',
  themeConfig: {
    showDarkModeSwitch: false,
    lineHeights: {
      body: 1.26,
    },
    styles: {
      root: {
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
      },
    },
  },
};

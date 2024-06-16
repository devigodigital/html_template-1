module.exports = {
  server: {
    baseDir: './',
    index: 'src/index.html'
  },
  port: 3000,
  files: ['**/*.js', '**/*.css', '**/*.html'],
  serveStatic: ['src', './']
};

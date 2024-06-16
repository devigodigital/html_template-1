module.exports = {
  server: {
      baseDir: 'src/',
      index: "index.html"
  },
  port: 3000,
  files: ['**/*.js', '**/*.css', '**/*.html'],
  serveStatic: ['./src/*']
};
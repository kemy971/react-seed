var gulp = require('gulp'),
  stream = require('webpack-stream');

/**
 * Webpack Config
 * @type {{devtool: string, module: {loaders: *[]}, plugins: *[]}}
 */
var webpackConfig = {
  devtool: 'source-map',
  output: { filename: 'bundle.js' },
  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/,loader: "babel-loader"}
    ]
  },
  plugins: []
};


/**
 * Webpack Task
 * - ReactJS Compile
 * - Compress JS
 */
gulp.task('js:reactCompile', function() {
    gulp.src('src/index.js')
      .pipe(stream(webpackConfig))
      .pipe(gulp.dest('dist/'));
});

gulp.task('js:watch',function () {
  gulp.watch('src/**/*.js',['js:reactCompile']);
});

gulp.task('default',['js:reactCompile','js:watch']);
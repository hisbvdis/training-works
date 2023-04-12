// =================================================================
// COMMANDS
// =================================================================
// - gulp: Run dev server
// - gulp prod: Run prod server
// - gulp build: Build prod server



// =================================================================
// PACKAGES
// =================================================================
// SERVICE
// npm i -g gulp-cli
// npm i -D  gulp  browser-sync  dev-ip
const gulp = require("gulp");
const browsersync = require("browser-sync").create();
const devip = require("dev-ip");

// STYLES (SASS)
// npm i -D  sass  gulp-sass  gulp-postcss  autoprefixer
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");

// IMAGES (RASTER)
// npm i -D  gulp-webp
const webp = require('gulp-webp');

// IMAGES (SVG)
// npm i -D  gulp-svgstore  gulp-svgmin
const svgstore = require("gulp-svgstore");
const svgmin = require("gulp-svgmin");

// FILES
// npm i -D  gulp-rename  gulp-sourcemaps  gulp-clean
const rename = require("gulp-rename");
const clean = require("gulp-clean");
const sourcemaps = require('gulp-sourcemaps');



// =================================================================
// SERVER
// =================================================================
// Dev server
gulp.task("default", function() {
  browsersync.init({
    server: "src",
    host: devip(),
    reloadDelay: 0,
    reloadDebounce: 100,
    notify: false,
  });

  gulp.watch("src/*.html").on("change", browsersync.reload);
  gulp.watch("src/sass/**/*.scss", gulp.series("sass-compile"));
  gulp.watch("src/images/svg-1-inbox/*.svg").on("add", gulp.series("svg-min"));
  gulp.watch("src/images/svg-3-sprite/").on("all", gulp.series("svg-sprite"));
  gulp.watch("src/images/img-1-inbox/*.*").on("add", gulp.series("image-min"));
});

// Prod server
gulp.task("prod", function() {
  browsersync.init({
    server: "build",
    host: devip(),
    reloadDelay: 0,
    reloadDebounce: 100,
    notify: false,
  });
});



// =================================================================
// TASKS (DEV)
// =================================================================
// SASS compilation
gulp.task("sass-compile", function() {
  return gulp
    .src("src/sass/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(rename("bundle.css"))
    .pipe(gulp.dest("src/css"))
    .pipe(browsersync.stream());
});

// SVG minification
gulp.task("svg-min", function() {
  return gulp
    .src("src/images/svg-1-inbox/*.svg")
    .pipe(svgmin({
      plugins: [{ name: 'removeViewBox', active: false }]
    }))
    .pipe(gulp.dest("src/images/svg-2-minified"));
});


// SVG sprite-generator
gulp.task("svg-sprite", function() {
  return gulp
    .src("src/images/svg-3-sprite/*.svg")
    .pipe(svgstore())
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("src/images/"));
});

// Image minification
gulp.task("image-min", function() {
  return gulp
    .src("./src/images/img-1-inbox/**")
    .pipe(webp())
    .pipe(gulp.dest("src/images/img-2-minified"));
});



// =================================================================
// TASKS (BUILD)
// =================================================================
// Build step 1: Clean "build" folder
gulp.task("build-folder-clean", function() {
  return gulp
    .src("build/*")
    .pipe(clean());
});

// Build step 2: HTML transfer
gulp.task("build-html", function() {
  return gulp
    .src("src/*.html")
    .pipe(gulp.dest("build/"));
});

// Build step 3: SASS compilation + autoprefixer + transfer
gulp.task('build-styles', () => {
  return gulp
    .src("src/sass/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(postcss([require("autoprefixer")]))
    .pipe(rename("bundle.css"))
    .pipe(gulp.dest('build/css'));
});

// Build step 4: Fonts transfer
gulp.task("build-fonts", function() {
  return gulp
    .src("src/fonts/**/*.*")
    .pipe(gulp.dest("build/fonts/"));
});

// Build step 5: Image transfer
gulp.task("build-img", function() {
  return gulp
    .src("src/images/*.*")
    .pipe(gulp.dest("build/images"));
});

// Build task
gulp.task(
  "build",
  gulp.series(
    "build-folder-clean",
    "build-html",
    "build-styles",
    "build-fonts",
    "build-img",
  )
);

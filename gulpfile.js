var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename");

var version = "1.0.0";

gulp.task("minify", function() {
    return gulp.src("./src/notify.microlib.js")
        .pipe(uglify())
        .pipe(rename( {suffix: "-" + version + ".min"} ))
        .pipe(gulp.dest("./dist/"));
});

gulp.task("build", ["minify"], function() {
	return gulp.src("./src/notify.microlib.js")
		.pipe(rename("notify.microlib-latest.js"))
		.pipe(gulp.dest("./dist/"));
});
var gulp = require('gulp');

gulp.task('html', ['css'], function() {

    return gulp.src('app/**/*.html', { base: "app" })
        .pipe(gulp.dest('dist/app/'));

});

gulp.task('css', function() {
    return gulp.src('app/**/*.css', { base: "app" })
        .pipe(gulp.dest('dist/app/'));
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.html', ['html']);
    gulp.watch('app/**/*.css', ['css']);
});
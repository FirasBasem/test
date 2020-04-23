var gulp = require ('gulp');
var connect = require('gulp-connect');

gulp.task('default',['bulid','connect','watch']);
gulp.task('connect',function()
{
    connect.server({
        root: 'bulid',
        livereload: true,
        port: 8080,

    })
});
gulp.task('watch' , function()
{
return gulp.watch('src/**/*',['bulid']);
});

gulp.task('html', function()
{
    return gulp.src('src/*.html')
    .pipe(gulp.dest('bulid')).pipe(connect.reload());
}
);
gulp.task('css', function()
{
    return gulp.src('src/css/*.css')
    .pipe(gulp.dest('bulid/css')).pipe(connect.reload());
}
);
gulp.task('images', function()
{
    return gulp.src('src/images/*.jpg')
    .pipe(gulp.dest('bulid/images')).pipe(connect.reload());
}
);
gulp.task('js', function()
{
    return gulp.src('src/js/*.js')
    .pipe(gulp.dest('bulid/js')).pipe(connect.reload());
}
);
gulp.task('fonts', function()
{
    return gulp.src('src/fonts/*')
    .pipe(gulp.dest('bulid/fonts')).pipe(connect.reload());
}
);
gulp.task('bulid',['html','css','js','fonts','images']);
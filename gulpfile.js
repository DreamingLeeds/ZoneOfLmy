var gulp = require('gulp');
var minifyCss=require('gulp-minify-css');
var minifyHtml=require('gulp-minify-html');
var uglify=require('gulp-uglify');

gulp.task('default',['minifyCss','minifyHtml']);

gulp.task('minifyHtml',function(){
    gulp.src('wapdev/*.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('wap'))
    console.log('html压缩完成');
});

gulp.task('minifyCss',function(){
    gulp.src('wapdev/css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('wap/css'));
    console.log('css压缩完成');

});

gulp.task('uglify',function(){
    gulp.src('wapdev/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('wap/js'))
    console.log('js压缩完成');
});
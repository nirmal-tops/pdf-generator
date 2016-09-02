var gulp = require('gulp'),
	nodemon = require("gulp-nodemon"),
	imgSrc = './views/images/*',
  imgDst = './public/images',
  updated_files = ["*.js","views/*.html"];

gulp.task('copyImages', function() { 
  gulp.src([imgSrc])
    .pipe(gulp.dest(imgDst));
});

gulp.task("serve",function(){
  var options = {
    script : "app.js",
    delayTime: 1,
    ext: 'js html'
  }
  return nodemon(options)
    .on('restart',function(ev){
      console.log("restartihng the server....")      
    })
});

gulp.task('default', ["copyImages","serve"], function() {
});

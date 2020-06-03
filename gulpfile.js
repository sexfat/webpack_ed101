var gulp = require('gulp');
//ftp
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );


gulp.task( 'ftp', function () {

 
    var conn = ftp.create( {
        host:     'ftp.71next.com',
        user:     'mrkuo@71next.com',
        password: 'qweasdzxc_123',
        parallel: 10
        
    } );
  
    var globs = [
        'dist/**',
        'dist/css/**',
        'dist/images/**',
        'dist/index.html'
    ];
  
    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
  
    return gulp.src( globs, { base: '.', buffer: false } )
        .pipe( conn.newer( '/public_html' ) ) // only upload newer files
        .pipe( conn.dest( '/public_html' ) );
  
  } );
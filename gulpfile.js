const gulp = require('gulp');
const spawn = require('child_process').spawn;
let node;

gulp.task('server', () => {
    if (node) {
        node.kill();
    }

    node = spawn('node', ['src/server.js'], {stdio: 'inherit'});

    node.on('close', (code) => {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
    });
});

gulp.task('watch', () => {
    gulp.watch(['src/**/*.js', 'web/css/**/*.css', 'views/**/*.twig'], () => {
        console.log();
        console.log('--------------------------------');
        console.log();
        gulp.run('server');
    });
});

gulp.task('default', ['server', 'watch']);

process.on('exit', () => {
    if (node) {
        node.kill();
    }
});

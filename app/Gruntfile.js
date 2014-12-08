'use strict';

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            dist: ['.tmp']
        },
        concat: {
            dist: {
                src: [
                    'bower_components/zeptojs/src/zepto.js',
                    'bower_components/zeptojs/src/event.js',
                    'bower_components/zeptojs/src/callbacks.js',
                    'bower_components/zeptojs/src/deferred.js',
                    'bower_components/zeptojs/src/ajax.js'
                ],
                dest: '.tmp/lib/jquery.js'
            }
        },
        coffee: {
            dist: {
                files: [{
                    // rather than compiling multiple files here you should
                    // require them into your main .coffee file
                    expand: true,
                    cwd: './coffee',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/scripts',
                    ext: '.js'
                }]
            }
        },
        less: {
            dist: {
                files: [{
                    expand: true,
                    cwd: './less',
                    src: '{,*/}*.less',
                    dest: '.tmp/styles',
                    ext: '.css'
                }]
            }
        },
        jade: {
            '../index.html': './index.jade'
        },
        requirejs: {
            dist: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    // `name` and `out` is set by grunt-usemin
                    baseUrl: '.tmp/scripts',
                    name: 'main',
                    out: '.tmp/main.js',
                    optimize: 'none',
                    paths: {
                        'jquery': '.tmp/lib/jquery.js',
                        'director': 'bower_components/director/build/director'
                    },
                    // TODO: Figure out how to make sourcemaps work with grunt-usemin
                    // https://github.com/yeoman/grunt-usemin/issues/30
                    //generateSourceMaps: true,
                    // required to support SourceMaps
                    // http://requirejs.org/docs/errors.html#sourcemapcomments
                    preserveLicenseComments: false,
                    useStrict: true,
                    //wrap: true,
                    wrap: {
                      startFile: [
                        '.tmp/lib/jquery.js',
                        'bower_components/almond/almond.js'
                      ]
                    }
                    //uglify2: {} // https://github.com/mishoo/UglifyJS2
                }
            }
        }
    });

    grunt.registerTask('default', [
        'clean',
        'concat',
        'coffee',
        'less',
        'requirejs',
        'jade'
    ]);
}

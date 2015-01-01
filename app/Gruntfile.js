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

        less: {
            options: {
                compress: true
            },
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
                        'jquery': '../../.tmp/lib/jquery',
                        'doT': '../../bower_components/doT/doT',
                        'director': '../../bower_components/director/build/director'
                    },
                    shim: {
                      jquery: {
                        exports: 'Zepto'
                      },
                      doT: {
                        exports: 'doT'
                      },
                      director: {
                        exports: 'Router'
                      }
                    },
                    wrapShim: true,

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
                        'bower_components/almond/almond.js',
                        '.tmp/scripts/config.js'
                      ]
                    }
                    //uglify2: {} // https://github.com/mishoo/UglifyJS2
                }
            }
        },

        jade: {
            '../index.html': './index.jade'
        },

        htmlmin: {
            dist: {
                options: {
                    removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    //useShortDoctype: true,
                    removeEmptyAttributes: true
                    //removeOptionalTags: true
                },
                files: [ 
                  { expand: true, cwd: '.tmp', src: ['*.html'], dest: '../' }
                ]
            }
        },

        exec: {
            dist: {
                cwd: '../',
                command: 'jekyll build',
                callback: function(){
                    grunt.log.write('jekyll build done.')
                }
            }
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            less: {
                files: ['./less/{,*/}*.less'],
                tasks: ['less', 'build'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            coffee: {
                files: ['./coffee/{,*/}*.coffee'],
                tasks: ['coffee2js', 'build'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            jade: {
                files: ['./{,*/}*.jade', './templates/{,*/}*.tmpl.html'],
                tasks: ['build'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                debug: true,
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            dist: {
                options: {
                    open: true,
                    base: '../_site'
                }
            }
        }
    });
    grunt.registerTask('serve', ['connect', 'watch']);
    grunt.registerTask('coffee2js', ['coffee', 'requirejs']);
    grunt.registerTask('build', ['jade', 'exec']);
    grunt.registerTask('default', [
        'clean',
        'concat',
        'less',
        'coffee2js',
        'build'
    ]);
}

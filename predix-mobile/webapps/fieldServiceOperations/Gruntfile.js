module.exports = function (grunt) {

    require('load-grunt-config')(grunt);
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
    require('time-grunt')(grunt);

    grunt.initConfig({
        connect: {
            options: {
                hostname: 'localhost',
                protocol: 'http'
            },
            dist: {
                options: {
                    port: 3005,
                    base: ['./dist/'],
                    livereload: false,
                    open: true,
                    keepalive: true
                }
            }
        },
        wiredep: {
            target: {
                src: 'index.html'
            }
        },
        injector: {
            dev: {
                files: {
                    'index.html': ['src/*.js', 'src/**/*.js', 'assets/css/*.css']
                }
            },
            dist: {
                options:{
                    relative : true
                },
                files: {
                    'dist/index.html': ['dist/*.js', 'dist/assets/css/*.css']
                }
            }
        },
        copy: {
            dev: {
                files: [
                    {
                        expand: true,
                        src: ['index.html'],
                        dest: 'dist/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'assets/fonts/*',
                        dest: 'dist/assets/fonts'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'assets/images/*',
                        dest: 'dist/assets/images'
                    }
                ]
            }
        },
        concat_css: {
            css: {
                files: {
                    'dist/assets/css/fso.css': [
                        'assets/css/*.css'
                    ]
                }
            }
        },
        concat: {
            dist: {
                src: ['src/*.js','src/**/*.js'],
                dest: 'dist/fso.js'
            }
        },
        ngtemplates: {
            options: {
                module: 'incidentMgmt',
                append: true,
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                }
            },
            fso: {
                cwd: './',
                src: 'src/{,**/}*.html',
                dest: 'dist/fso.js'
            }
        },
        bower_concat: {
            all: {
                dest: {
                    'js': 'dist/bower.js',
                    'css': 'dist/assets/css/bower.css'
                },
                bowerOptions: {
                    relative: false
                }
            }
        }
    });

    grunt.loadTasks('grunt');

    grunt.registerTask('default', [
        'injector:dev',
        'wiredep'
    ]);


    grunt.registerTask('serve', function () {
        grunt.task.run([
            'default',
            'connect:dist'
        ]);

    });

    grunt.registerTask('run', [
        'concat_css',
        'concat',
        'bower_concat',
        'ngtemplates',
        'copy',
        'injector:dist',
        'connect:dist'
    ]);


};


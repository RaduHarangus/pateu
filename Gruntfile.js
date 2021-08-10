module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            main: {
                src: [
                    'js/nav.js',
                    'js/subscribe.js',
                    'js/timer.js',
                    'js/carousel.js',
                    'js/contact.js',
                    'js/tooltips.js',
                    'js/forms.js',
                    'js/menu.js',
                    'js/modal.js',
                    'js/tabs.js',
                    'js/emailValidation.js',
                    'js/scrollTop.js',
                ],
                dest: 'main.js',
                options: {
                    separator: '\n\n',
                    interrupt: true
                }
            }
        },
        less: {
            files: {
                src: [
                    'less/main.less',
                ],
                dest: 'style.css'
            }
        },
        watch: {
            less: {
                files: [
                    'less/*.less',
                    'less/**/*.less'
                ],
                tasks: ['less']
            },
            js: {
                files: [
                    'js/*.js'
                ],
                tasks: ['concat']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // the default task can be run just by typing "grunt" on the command line
    grunt.registerTask('default', ['watch', 'less', 'concat']);
}
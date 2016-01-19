/*Gruntfile - tasks for Grunt*/

"use strict";

module.exports = function(grunt){

    //1. charge les tâches
    grunt.loadNpmTasks("grunt-eslint");
    grunt.loadNpmTasks("grunt-contrib-sass");

    //2. configure les tâches
    grunt.initConfig({
        "eslint": {
            "server": [
                "js/**/*.js"
            ]
        },
        sass: {                              // Task 
            dist: {                            // Target 
                options: {                       // Target options 
                    style: 'expanded'
                },
                files: {                         // Dictionary of files 
                    'css/*.css': 'scss/*.scss',       // 'destination': 'source' 
                    'css/style.css': 'scss/style.scss',
                }
            }
        }
    });

    //3. crée des alias
    grunt.registerTask("default", [
        "sass"
    ])

}

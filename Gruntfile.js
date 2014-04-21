module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '<%= pkg.banner.divider %>' +
              '<%= pkg.banner.project %>' +
              '<%= pkg.banner.copyright %>' +
              '<%= pkg.banner.license %>' +
              '<%= pkg.banner.licenseLink %>' +
              '<%= pkg.banner.divider %>' +
              '\n' +
              '// Version: <%= pkg.version %> | From: <%= grunt.template.today("dd-mm-yyyy") %>\n\n'
    },
    jasmine: {
      src: [
        'node_modules/stik-core.js/stik-core.js',
        'node_modules/stik-labs.js/stik-labs.js',
        'view-bag.js'
      ],
      options: {
        specs: 'specs.js',
      }
    },
    uglify: {
      options: {
        banner: '<%= meta.banner %>',
        mangle: false
      },
      stik: {
        files: {
         'view-bag.min.js': ['view-bag.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('test', 'jasmine');
  grunt.registerTask('pack', 'uglify');
};

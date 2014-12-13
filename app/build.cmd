call npm.cmd install
call bower.cmd install
call grunt.cmd
cd ../
call jekyll build
cd ./app

call npm.cmd update
call bower.cmd install
call grunt.cmd
cd ../
jekyll build
cd ./app

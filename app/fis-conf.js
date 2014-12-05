//fis-conf.js
fis.config.merge({
    modules : {
        parser : {
            //coffee后缀的文件使用fis-parser-coffee-script插件编译
            coffee : 'coffee-script',
            //less后缀的文件使用fis-parser-less插件编译
            //处理器支持数组，或者逗号分隔的字符串配置
            less : ['less'],
            //jade后缀的文件使用fis-parser-jade插件编译
            jade : 'jade'
        }
    },
    roadmap : {
        ext : {
            //less后缀的文件将输出为css后缀
            //并且在parser之后的其他处理流程中被当做css文件处理
            less : 'css',
            //coffee后缀的文件将输出为js文件
            //并且在parser之后的其他处理流程中被当做js文件处理
            coffee : 'js',
            //jade后缀的文件将输出为html文件
            //并且在parser之后的其他处理流程中被当做html文件处理
            jade : 'html'
        }
    }
});
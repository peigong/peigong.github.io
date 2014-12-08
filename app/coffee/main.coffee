# 此处定义，仅供参考。各模块使用shim模块时，均直接使用其全局变量。
requirejs.config
    shim:
        jquery:
            exports: '$'

require ['providers/data', 'controllers/blog'], (provider, blog) ->
    blog.categories = provider.getCategories()


IPrincipal  用户对象的基本功能
IIdentity 标识对象的基本功能


HttpContext.User IPrincipal

HttpContext.User.Identity 属性中的 IIdentity 对象

System.Security.Principal.IPrincipal

* Identity	获取当前用户的标识。
* IsInRole	确定当前用户是否属于指定的角色。

System.Security.Principal.IIdentity

* AuthenticationType
* IsAuthenticated
* Name

使用LDAP协议来访问Active Directory


单点登录的实质就是安全上下文（Security Context）或凭证（Credential）在多个应用系统之间的传递或共享。

同时登录的用户切换，当前用户


System.Security

* IPermission

HttpContext 

* HttpContext(HttpRequest, HttpResponse)
* Current	为当前 HTTP 请求获取或设置 HttpContext 对象。
* Profile	获取当前用户配置文件的 ProfileBase 对象。
* User	为当前 HTTP 请求获取或设置安全信息。
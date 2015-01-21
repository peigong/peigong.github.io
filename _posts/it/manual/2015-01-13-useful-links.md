---
layout: post
category: manual
title: 有用的网址链接
---

## javascript开发 ##

- [Web移动,手机应用iOS,Android开发框架](http://www.open-open.com/ajax/Mobile_Framework.htm)
- [js实践篇：例外处理Try{}catch(e){}](http://www.cnblogs.com/luluping/archive/2011/02/14/1954092.html)
- [使用onbeforeunload属性后的副作用](http://www.cnblogs.com/birdshome/archive/2005/09/30/OnBeforeUnload.html)

## Linux服务器 ##

- [如何实现安全的免密码ssh登录](http://blog.chinaunix.net/uid-20761674-id-74963.html)
	- 在跳板机宿主目录下的`.bashrc`文件底部加入 eval \`/usr/local/bin/ssh-attach\`
	- 尝试`SSH`登陆任意一台机器，输入正确的口令
	- 退出后，重新登陆跳板机，再次输入口令，即可ssh 任意机器（或者`source .bashrc`）

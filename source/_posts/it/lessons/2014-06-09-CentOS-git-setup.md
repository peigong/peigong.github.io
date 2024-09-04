---
title: CentOS下安装git和配置git服务器
categories:
  - it
  - lessons
date: 2014-06-09 00:00:00
updated: 2024-08-30 00:00:00
---

在远程仓库一节中，我们讲了远程仓库实际上和本地仓库没啥不同，纯粹为了7x24小时开机并交换大家的修改。

GitHub就是一个免费托管开源代码的远程仓库。但是对于某些视源代码如生命的商业公司来说，既不想公开源代码，又舍不得给GitHub交保护费，那就只能自己搭建一台Git服务器作为私有仓库使用。

搭建Git服务器需要准备一台运行Linux的机器，强烈推荐用Ubuntu或CentOS，这样，通过几条简单的apt或yum命令就可以完成安装。

假设你已经有sudo权限的用户账号，下面，正式开始安装。

### 第一步，安装git： ###

	yum install curl curl-devel zlib-devel openssl-devel perl cpio expat-devel gettext-devel

下载最新的git包

	wget http://www.codemonkey.org.uk/projects/git-snapshots/git/git-latest.tar.gz
	tar xzvf git-latest.tar.gz
	cd git-2011-11-30 ＃你的目录可能不是这个
	autoconf
	./configure --prefix=/usr/local/git
	make
	make install

检查下安装的版本，大功告成

	git --version

### 第二步，创建一个git用户，用来运行git服务： ###

	$ sudo adduser git
	$ git config --global user.name "whdsmile"
	$ git config --global user.email "whdsmile@gmail.com"

### 第三步，创建证书登录： ###

收集所有需要登录的用户的公钥，就是他们自己的id_rsa.pub文件，把所有公钥导入到/home/git/.ssh/authorized_keys文件里，一行一个。

### 第四步，初始化Git仓库： ###

先选定一个目录作为Git仓库，假定是/srv/sample.git，在/srv目录下输入命令：

	$ sudo git init --bare sample.git

Git就会创建一个裸仓库，裸仓库没有工作区，因为服务器上的Git仓库纯粹是为了共享，所以不让用户直接登录到服务器上去改工作区，并且服务器上的Git仓库通常都以.git结尾。然后，把owner改为git：

$ sudo chown -R git:git sample.git

### 第五步，禁用shell登录： ###

出于安全考虑，第二步创建的git用户不允许登录shell，这可以通过编辑/etc/passwd文件完成。找到类似下面的一行：

	git:x:1001:1001:,,,:/home/git:/bin/bash
	改为：
	git:x:1001:1001:,,,:/home/git:/usr/local/git/bin/git-shell

这样，git用户可以正常通过ssh使用git，但无法登录shell，因为我们为git用户指定的git-shell每次一登录就自动退出。

### 第六步，在/srv/sample.git目录下，假设有一个test目录： ###

	$ git add test
	$ git commit -m "add file"

### 第七步，在开发机上克隆远程仓库： ###

现在，可以通过git clone命令克隆远程仓库了，在各自的电脑上运行：

	$ git clone git@server:/srv/sample.git

	Cloning into 'sample'...
	warning: You appear to have cloned an empty repository.

剩下的推送就简单了。

管理公钥

如果团队很小，把每个人的公钥收集起来放到服务器的/home/git/.ssh/authorized_keys文件里就是可行的。如果团队有几百号人，就没法这么玩了，这时，可以用Gitosis来管理公钥。

这里我们不介绍怎么玩Gitosis了，几百号人的团队基本都在500强了，相信找个高水平的Linux管理员问题不大。

### 参考资料 ###

- [GitLab和TortoiseGit、msysGit的配合使用](/articles/it-env-2014-02-22-TortoiseGit-andl-msysGit-for-gitlab.html)
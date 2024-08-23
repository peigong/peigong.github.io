---
title: GitLab和TortoiseGit、msysGit的配合使用
date: 2014-02-22
updated: 2024-08-22
categories:
  - it
  - env
---

## 软件安装 ##

下载和安装windows下Git环境：

1. [TortoiseGit(https://code.google.com/p/tortoisegit/)](https://code.google.com/p/tortoisegit/)，是TortoiseSVN的Git变种，主要用于图形化显示。
2. [msysGit(https://code.google.com/p/msysgit/)](https://code.google.com/p/msysgit/)，windows下的Git版本，是TortoiseGit所必须依赖的。

下载完两个软件之后，首先安装TortoiseGit，安装完TortoiseGit之后先别急着用，接着安装msysGit，安装过程中的一些选项都可以默认！

## SSH密钥和Git Bash ##

本节介绍在Git命令行（Git Bash）中SSH密钥的生成，以及在Gitlab上的使用。

使用命令行进行Git操作，显得高端、大气、上档次。如果你不慕虚名，只想生活简单而美好，就像使用SVN小乌龟（TortoiseSVN）那样工作，可以直接跳过本节。

### 生成SSH密钥 ###

1. 检查当前用户目录中有没有.ssh目录。如果没有的话，在命令行中使用`mkdir .ssh`创建。
2. 安装Git后，进入某个目录，使用右键菜单打开 "Git Bash"。
3. 键入命令：`ssh-keygen -t rsa -C "your email"`。邮件地址可以不写，默认是`本机用户名@本机机器名`。最好是填写一些标识自己的记号。
4. 提醒你输入key的名称，输入“id_rsa”。**注意：**id_rsa名字是固定的，因为GitLab只认识这个。
5. 提醒你输入key的密码，空白即可。
6. 在当前目录下产生两个密钥文件：id_rsa和id_rsa.pub
7. 把生成的密钥文件复制到当前用户的.ssh目录下。

### 在Gitlab上添加公钥 ###

用记事本打开、复制id_rsa.pub文件的内容，在Gitlab网站My Porfile页面右下角，点击“Add Public Key”，粘贴刚才复制的内容到Key的大文本框，提交即可。

**注意：**在复制内容的时候，文本的两端都不要有空格和换行。

### 在命令行中进行Git操作 ###

从程序目录打开 "Git Bash"（或使用右键菜单），在命令行中`git clone`一个项目。

提示是否把项目Git库的域名设置为可信任的已知域名，直接回答`yes`就可以了。

其他命令，一样的用法。不清楚的话，可以查阅《[史上最浅显易懂的Git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)》。

## TortoiseGit中的密钥 ##

本节介绍在Git小乌龟（TortoiseGit）中生成密钥，以及在Gitlab上的使用。

### 生成密钥 ###

1. 在开始菜单->TortoiseGit->Puttygen。这是一个用于TortoiseGit的Putty密钥生成器。
2. 点击“generate”按钮。让鼠标在“generate”按钮以上、进度条以下的空白区域随机晃动，直到密钥生成完毕。
3. 复制粘贴空白区域生成的SSH密钥文本（ssh-rsa。。。），在Gitlab网站My Porfile页面右下角，点击“Add Public Key”，粘贴刚才复制的内容到Key的大文本框，提交即可。**注意：**在复制内容的时候，文本的两端都不要有空格和换行。Title文本框随便写一些内容就可以，主要是区别不同的Key，没有特别的用途。
4. 点击“save private key”按钮，把文件生成在当前用户目录下的.ssh目录中（生成的文件后缀是`.ppk`）。

### 使用右键菜单 ###

1. 在打算`git clone`项目的目录中，右键选择`Git克隆`。
2. 勾选“加载putty密钥”，并选择上面生成的后缀是`.ppk`的私钥文件。
3. 后续的操作，及除`git clone`以外的工作，就不需赘述了。

## 参考资料 ##

- [史上最浅显易懂的Git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
- [The entire Pro Git book](http://git-scm.com/book/zh)
- [用Gitlab来工作](http://feiyang.me/2013/03/work-with-gitlab/)
- [GitLab使用介绍](http://www.docin.com/p-596784591.html)
- [GitLab在windows用户端的使用教程](http://blog.csdn.net/bluesky8640/article/details/8171104)
- [gitlab搭建之旅](http://www.cnblogs.com/lenolix/archive/2013/02/06/2906466.html)
- [在CentOS里安装GitLab](http://www.linuxidc.com/Linux/2013-05/85184.htm)
- [gitlab多人协同工作](http://herry2013git.blog.163.com/blog/static/219568011201341111240751/)
- [软件包详情: gitlab 6.4.0-1](https://aur.archlinux.org/packages/gitlab/?setlang=zh_CN)

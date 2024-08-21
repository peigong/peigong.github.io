---
layout: post
category: env
title: Git使用笔记
categories:
  - - it
  - - env
---

## 基本配置

    git config user.email "my_name@email.com"
    git config user.name "my name"

## 设置SSH

如果已经生成过ssh key pair，这里不必再次生成，复用即可。

    ssh-keygen -t rsa -C "your email"

邮件地址可以不写，默认是本机用户名@本机机器名。最好是填写一些标识自己的记号。

然后一路回车，不要输入任何密码之类，生成ssh key pair。

如果在Linux上，需要把其中的私钥告诉本地系统：

    ssh-add ~/.ssh/id_rsa

再把其中公钥的内容复制到GitLab上。具体方法是：

显示ssh公钥的内容：

    cat ~/.ssh/id_rsa.pub

在Gitlab网站My Porfile页面右下角，点击“Add Public Key”，粘贴刚才复制的内容到Key的大文本框，提交即可。

注意：在复制内容的时候，文本的两端都不要有空格和换行。

## 基本命令

> 假定开发需要的分支为branch_dev

### 把改动提交到本地版本库

- `git add <file>`:添加文件到Git仓库，可反复多次使用，添加多个文件。

    git commit -am "我是提交注释"     

- -m 是加提交注释用；
- -a 是告诉Git，当前所有的修改，都纳入本次提交。

### 把改动推送到服务器

在推送之前，需要先执行`git pull`把别人的改动拉下来合并，等同于 git fetch; git merge origin/branch_dev

然后使用`git push`推送到服务器。

这是 git push origin branch_dev:branch_dev 的简写。因为要push的是本地当前分支branch_dev，且其upstream分支名是origin/branch_dev，同名，所以可以全省略。

### 创建服务器端分支

- `git fetch`:如果刚同步过，此处就不必再次同步
- `git checkout -b branch_dev origin/master`:基于origin/master创建本地分支branch_dev，并检出。是`git branch branch_dev origin/master`和`git checkout branch_dev` 的简写。现在branch_dev的upstream为origin/master。`-b`参数表示创建并切换
- `git push origin HEAD -u`:相当于`git push origin branch_dev -u`，是`git push origin branch_dev:branch_dev -u`的简写。`-u` 的作用是把本地branch_dev的upstream由原先的origin/master改为origin/branch_dev。

### 把主线上的最新改动合并过来

- `git pull`:等同于 git fetch 更新所有的远程分支，然后再 git merge origin/branch_dev
- `git merge origin/master`
- `git push`:是 git push origin branch_dev:branch_dev 的简写。因为要push的是本地当前分支branch_dev，且其upstream分支名是origin/branch_dev，同名，所以可以全省略。

### 常用命令 ###

- `git init`:初始化一个Git仓库
- `git status`:查看工作区的状态
- `git clone`:克隆远程版本库
- `git branch`:命令会列出所有分支，当前分支前面会标一个*号。
- `git branch <name>`:创建分支
- `git checkout <name>`:切换分支
- `git checkout -b <name>`:创建+切换分支
- `git merge <name>`:合并某分支到当前分支
- `git branch -d <name>`:删除分支
- `git log --graph`:查看分支合并图
- `git rm`:用于删除一个文件
- `git diff`:查看修改内容
- HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令git reset --hard commit_id。
- `git log`:查看提交历史。
- 要重返未来，用`git reflog`查看命令历史，以便确定要回到未来的哪个版本。

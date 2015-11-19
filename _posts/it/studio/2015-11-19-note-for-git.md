---
layout: post
category: studio
title: Git使用笔记 
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

---
layout: post
category: lessons
title: Yeoman的安装和使用
tagline: Yeoman的安装和使用
tags : [开发工具, Yeoman, 脚手架]
---
{% include JB/setup %}

## 安装步骤 ##

> 本教程的内容较少原创，多从其他文档上摘录。

Yeoman 1.0 包含以下三套工具，分別說明如下：

yo - the scaffolding tool from Yeoman ( 用來自動產生網站骨架或程式碼的工具 )
bower - the package management tool ( 用來管理特定網站下所使用的各式前端套件，如: jQuery )
grunt - the build tool ( 用來執行一些網站的自動化工作，例如單元測試、最小化、執行批次命令 )
要安裝這三套工具之前，還有許多相依的工具必須事先安裝，否則工具指令會無法正確執行，以下包括 node.js , Git for Windows 與 RubyInstaller 這三套工具的安裝注意事項：

#### 安裝 node.js for Windows ####

请选择正確的 Windows 安裝包，注意 CPU 架構有区分 32-bit 与 64-bit 两种：

![node安装包](http://clientlab.github.io/images/articles/lessons/install-yeoman/node.png)

安裝时要确保 Add to PATH 項目有被安装进去：

![node安装](http://clientlab.github.io/images/articles/lessons/install-yeoman/node2.png)

#### 安裝 Git for Windows 工具 ####

安裝到 Adjusting your PATH environment 步骤時，选择 Run Git from the Windows Command Prompt 的相容性比较高，问题也会少很多：

![git安装](http://clientlab.github.io/images/articles/lessons/install-yeoman/git.png)

其他保留预设值即可。

#### 安装 Ruby 执行环境 ####
由於前端开发作业经常会用到 Compass 工具撰写 CSS，而且在使用 Yeoman 的時候，有些产生器所产生的 grunt 定义包也会用到 Compass 来执行，所以可以预先安装好。

安裝 Compass 工具会需要先安裝 Ruby 才能安装与使用。建议通过 RubyInstaller (Windows) 提供的 MSI 安装包进行安裝，但安裝的过程中有一個步驟非常重要，你必須在 Installation Destination and Optional Tasks 步驟時，勾选 Add Ruby executables to your PATH 选项才行，如下图示：

![ruby安装](http://clientlab.github.io/images/articles/lessons/install-yeoman/ruby.png)

安裝好这些工具之后，就可以开始准备安裝 Yeoman 相关工具了：

1. 打开命令行。
2. 使用npm 安裝 yo , bower 與 grunt 工具。

		npm install -g yo grunt-cli bower

	其中 -g 代表要把 yo , grunt-cli , bower 這三个套件安裝到全域 (global)

	![yo安装](http://clientlab.github.io/images/articles/lessons/install-yeoman/yo.png)

3. 安裝 yo 相关的 程序码产生器 (generator) 套件
   
	因為 yo 這套工具主要就是用來自動產生網站骨架或程式碼，在執行 yo 之前，你必須預先安裝好這些程式碼產生器範本，這些被稱為 YEOMAN GENERATORS，你可以在 YEOMAN GENERATORS 找到許多現成的產生器範本，並且一樣透過 npm 進行安裝。

	例如你在 YEOMAN GENERATORS 頁面找到一個 webapp 產生器，那麼你可以用以下指令進行安裝：

		npm install -g generator-webapp
	如果想安裝 angular 產生器，那麼你可以用以下指令進行安裝：

		npm install -g generator-angular
	以此類推！
4. 如果你要順道安裝 Compass 的話，也可以輸入以下指令進行安裝

		gem update --system
		gem install compass

	Yeoman 與 Compass 安裝完成！

## Yeoman 的使用 ##
1. 先创建一个网站目录，例如webapp。
2. 在这个目录下，命令行执行命令，产生网站骨架：
	yo angular

	这是一個交互的过程，yo安装哪些模块：
	
	![创建网站](http://clientlab.github.io/images/articles/lessons/install-yeoman/create.png)
	安装完成后可能会遇到一些问题，如：
	![创建网站](http://clientlab.github.io/images/articles/lessons/install-yeoman/create2.png)
	表示依赖的模块需要手动bower install & npm install安装。








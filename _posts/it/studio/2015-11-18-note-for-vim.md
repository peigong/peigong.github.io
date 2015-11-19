---
layout: post
category: studio
title: VIM使用笔记 
---

## 环境配置

- 在Ubuntu中使用`sudo apt-get install vim`安装。
- 在`~/.vimrc`中加入一行`:set number`设置行号。

## 常用命令

## 插件

### 中文帮助 vimcdoc 

    cd /usr/local/src
    sudo wget http://nchc.dl.sourceforge.net/sourceforge/vimcdoc/vimcdoc-1.5.0.tar.gz
    tar xvf vimcdoc-1.5.0.tar.gz
    cd vimcdoc-1.5.0
    sudo ./vimcdoc.sh -i 

### 插件管理 vim-pathogen

[tpope/vim-pathogen:manage your runtimepath](https://github.com/tpope/vim-pathogen)

安装插件`~/.vim/autoload/pathogen.vim`：
 
    mkdir -p ~/.vim/autoload ~/.vim/bundle
    curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim

在`~/.vimrc`中添加：

    execute pathogen#infect()

安装其他插件的方法：

    cd ~/.vim/bundle
    git clone git://github.com/tpope/vim-sensible.git

### 目录树插件 nerdtree

[scrooloose/nerdtree:A tree explorer plugin for vim](https://github.com/scrooloose/nerdtree)

使用`pathogen.vim`安装：

    cd ~/.vim/bundle
    git clone https://github.com/scrooloose/nerdtree.git

使用`apt-vim`安装：

    apt-vim install -y https://github.com/scrooloose/nerdtree.git

### 代码补全插件 neocomplete

[Shougo/neocomplete.vim:Next generation completion framework after neocomplcache](https://github.com/Shougo/neocomplete.vim)

Debian (or Ubuntu)系统下的依赖：

－vim-nox
－vim-gtk
－vim-gnome
－vim-athena

使用`pathogen.vim`安装：

    cd ~/.vim/bundle
    git clone https://github.com/Shougo/neocomplete.vim.git

在`~/.vimrc`中添加：

    let g:neocomplete#enable_at_startup = 1



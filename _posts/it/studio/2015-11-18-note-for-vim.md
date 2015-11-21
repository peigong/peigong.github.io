---
layout: post
category: studio
title: VIM使用笔记 
---

## 环境配置

- 在Ubuntu中使用`sudo apt-get install vim`安装。
- 在`~/.vimrc`中加入一行`:set number`设置行号。

## 常用命令

### 快速的定位光标

- ^ 跳到行首 (类似功能键Home)
- $ 跳到行尾(类似功能键End)
- :n 跳到第n行
- :$ 跳到最后一行

### 快速的编辑

在普通模式下:

- dd 删除一行
- yy 复制一行
- p 粘贴
- r 单个字符替换

更精细的粘贴复制:

- m,nd - 快速删除第m到第n行 (delete)
- m,ny - 复制第m到第n行 (yank)
- m,nmt - 第m行到第n行剪切到第t行(move)
- m,ncot -第m行到第n行复制到第t行(copy to)

### 搜索

- 普通模式下按下 / 向下搜索, 按下?向上搜索

### 对齐

- gg=G 快速对齐整个文件

### 标签操作

- :tabnew mytab 新建一个标签mytab
- :tabn 跳到下一个标签
- :tabp 跳到上一个标签
- 用gt或gT在普通模式下跳转到下一个和上一个标签

### 切割窗口操作

- :split 水平方向切割一个窗口
- :vsplit 竖直方向切割一个窗口
- 用Ctrl-w+方向键 在各个切割窗口之间切换。

## 插件

### 中文帮助 vimcdoc 

    cd /usr/local/src
    sudo wget http://nchc.dl.sourceforge.net/sourceforge/vimcdoc/vimcdoc-1.5.0.tar.gz
    sudo tar xvf vimcdoc-1.5.0.tar.gz
    cd vimcdoc-1.5.0
    sudo ./vimcdoc.sh -i 

### 插件管理 vim-pathogen

GitHub:[tpope/vim-pathogen:manage your runtimepath](https://github.com/tpope/vim-pathogen)

安装插件`~/.vim/autoload/pathogen.vim`：
 
    mkdir -p ~/.vim/autoload ~/.vim/bundle
    curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim

在`~/.vimrc`中添加：

    execute pathogen#infect()

安装其他插件的方法：

    cd ~/.vim/bundle
    git clone git://github.com/tpope/vim-sensible.git

### 目录树插件 nerdtree

GitHub:[scrooloose/nerdtree:A tree explorer plugin for vim](https://github.com/scrooloose/nerdtree)

使用`pathogen.vim`安装：

    cd ~/.vim/bundle
    git clone https://github.com/scrooloose/nerdtree.git

使用`apt-vim`安装：

    apt-vim install -y https://github.com/scrooloose/nerdtree.git

### 代码补全插件 neocomplete

GitHub:[Shougo/neocomplete.vim:Next generation completion framework after neocomplcache](https://github.com/Shougo/neocomplete.vim)

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



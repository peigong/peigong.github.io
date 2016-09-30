---
layout: post
category: studio
title: VIM使用笔记 
---

## 安装 ##

	cd /usr/local/src/vim/vim-7.4.942
	sudo ./configure --prefix=/usr/local/vim --with-features=huge --enable-pythoninterp --enable-python3interp --enable-luainterp --enable-multibyte --enable-sniff --enable-fontset
	sudo make
	sudo make install

## 环境配置 ##

- 在Ubuntu中使用`sudo apt-get install vim`安装。
- 在`~/.vimrc`中加入一行`:set number`设置行号。
- vimtutor:sudo apt-get install vimtutor

## 配置 ##

### 参考配置 ###

- [amix/vimrc:The ultimate Vim configuration: vimrc](https://github.com/amix/vimrc)
- [humiaozuzu/dot-vimrc:Maple's vim config files](https://github.com/humiaozuzu/dot-vimrc)
- [spf13/spf13-vim:The ultimate vim distribution](https://github.com/spf13/spf13-vim)

### 自用配置 ###

	" 显示行号  
	set number
	" 显示标尺
	set ruler
	" 设置当文件被改动时自动载入
	set autoread
	" 自动保存  
	set autowrite
	" 自动缩进  
	set autoindent
	" 智能缩进  
	set smartindent
	set cindent 
	" 制表符
	set noexpandtab
	set smarttab
	" Tab键的宽度
	set tabstop=4
	set expandtab
	" 统一缩进为4
	set softtabstop=4
	set shiftwidth=4
	" 搜索逐字符高亮
	set hlsearch                                                                                                                                     
	set incsearch
	set smartcase
	" 不自动添加空行
	set noendofline binary
	" 自动切换当前目录
	set autochdir
	               
	syntax on   
	filetype plugin indent on
	runtime macros/matchit.vim
	               
	" 关闭 vi 兼容模式
	set nocompatible
	               
	" Highlight current line
	au WinLeave * set nocursorline nocursorcolumn
	au WinEnter * set cursorline cursorcolumn
	set cursorline cursorcolumn
	               
	set showcmd       " display incomplete commands
	set laststatus=2  " Always display the status line
	set fileencodings=utf-8,gb18030,gbk,big5
	               
	execute pathogen#infect()
	" 不支持箭头的系统可以设置为加号
	let g:NERDTreeDirArrowExpandable = '+' 
	let g:NERDTreeDirArrowCollapsible = '+' 

	let g:neocomplete#enable_at_startup = 1
                            
	" 配色 需要放在pathogen#infect()后面
	se t_Co=16                    
	let g:solarized_termcolors=256
	set background=dark           
	colorscheme solarized  

## 插件 ##

### 中文帮助 vimcdoc ### 

    cd /usr/local/src
    sudo wget http://nchc.dl.sourceforge.net/sourceforge/vimcdoc/vimcdoc-1.5.0.tar.gz
    sudo tar xvf vimcdoc-1.5.0.tar.gz
    cd vimcdoc-1.5.0
    sudo ./vimcdoc.sh -i 

### 插件管理 vim-pathogen ###

GitHub:[tpope/vim-pathogen:manage your runtimepath](https://github.com/tpope/vim-pathogen)

安装插件`~/.vim/autoload/pathogen.vim`：
 
    mkdir -p ~/.vim/autoload ~/.vim/bundle
    curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim

在`~/.vimrc`中添加：

    execute pathogen#infect()

安装其他插件的方法：

    cd ~/.vim/bundle
    git clone git://github.com/tpope/vim-sensible.git

### 目录树插件 nerdtree ###

GitHub:[scrooloose/nerdtree:A tree explorer plugin for vim](https://github.com/scrooloose/nerdtree)

使用`pathogen.vim`安装：

    cd ~/.vim/bundle
    git clone https://github.com/scrooloose/nerdtree.git

使用`apt-vim`安装：

    apt-vim install -y https://github.com/scrooloose/nerdtree.git

### 代码补全插件 neocomplete ###

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

### 配色插件 ###

> PS:最牛逼的配色，不能推荐更多

[GitHub](https://github.com/altercation/vim-colors-solarized):precision colorscheme for the vim text editor [http://ethanschoonover.com/solarized](http://ethanschoonover.com/solarized)

使用`pathogen.vim`安装：

	cd ~/.vim/bundle
	git clone git://github.com/altercation/vim-colors-solarized.git

在`~/.vimrc`中添加：
                           
	" 配色 需要放在pathogen#infect()后面
	se t_Co=16                    
	let g:solarized_termcolors=256
	set background=dark           
	colorscheme solarized  

### 其他插件 ###

- [kchmck/vim-coffee-script:CoffeeScript support for vim](https://github.com/kchmck/vim-coffee-script)



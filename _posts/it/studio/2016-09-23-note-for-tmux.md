---
layout: post
category: studio
title: Tmux使用笔记 
---

## 安装 ##

	sudo yum install tmux

## 基本使用 ##

- **tmux：**运行 tmux -2 以256终端运行
- **C-b d：**返回主 shell ， tmux 依旧在后台运行，里面的命令也保持运行状态
- **tmux ls：**显示已有tmux会话（C-b s）
- **tmux a -t session-name：**选择tmux
- **tmux new -s session-name：**
- **tmux kill-session -t session-name：**

## 快捷键 ##

快捷键参考 按下 Ctrl-b 后的快捷键如下：

### 基础 ###

- **?：**获取帮助信息

### 会话管理 ###

- **s：**列出所有会话
- **$：**重命名当前的会话
- **d：**断开当前的会话

### 管理窗口 ###

- **c：**创建一个新窗口
- **,：**重命名当前窗口
- **w：**列出所有窗口
- **%：**水平分割窗口
- **"：**竖直分割窗口
- **n：**选择下一个窗口
- **p：**选择上一个窗口
- **0~9：**选择0~9对应的窗口

### 窗格管理 ###

- **%：**创建一个水平窗格
- **"：**创建一个竖直窗格
- **q：**显示窗格的编号
- **o：**在窗格间切换

## 配置  `~/.tmux.conf` ##

	# bind a reload key
	bind R source-file ~/.tmux.conf ; display-message "Config reloaded.."

## 教程 ##

- [Tmux 入门介绍](http://blog.jobbole.com/87278/)
- [Tmux 速成教程：技巧和调整](http://blog.jobbole.com/87584/)

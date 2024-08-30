---
title: Linux下的压缩解压缩命令
categories:
  - it
  - env
date: 2015-03-26 00:00:00
updated: 2024-08-30 00:00:00
---

## 压缩 ##

	zip -r peigong.zip ./peigong

将当前目录下的所有文件和文件夹全部压缩成`peigong.zip`文件，`－r`表示递归压缩子目录下所有文件。

## 解压缩 ##

	unzip -o -d /home/peigong peigong.zip

把`peigong.zip`文件解压到`/home/peigong/`

1. **-o:**不提示的情况下覆盖文件。
2. **-d:**`-d /home/peigong`指明将文件解压缩到`/home/peigong`目录下。

## 其他 ##

	zip -d peigong.zip smart.txt

删除压缩文件中`smart.txt`文件

	zip -m peigong.zip ./rpm_info.txt

向压缩文件中`peigong.zip`中添加`rpm_info.txt`文件

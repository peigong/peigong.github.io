---
layout: post
category: env
title: Linux下的上传下载工具rz和sz
categories:
  - - it
  - - env
---

> Linux下的上传下载工具rz和sz一般在 SecureCRT ssh中使用。

## 检查安装 ##

**验证方法：**运行命令`rz`,如果弹出SecureCRT上传窗口，表示已经安装。

如果还没有安装，可以直接用`yum`安装：

	yum install lrzsz -y

安装后，使用上述验证方法，验证安装是否成功。

## 命令使用 ##

1. 下载：`sz filename`
2. 覆盖下载：`sz -y filename`
3. 上传：`rz`
4. 覆盖上传：`rz -y`

## 注意事项 ##

- 上传下载目录默认是SecureCRT安装目录下的`upload/download`目录，也可以在SecureCRT的“选项-会话选项-终端-X/Y/Zmodem”自行设置修改。
- 在弹出SecureCRT上传窗口选中文件后，需要点击添加按钮，添加到发送的文件列表，然后再点击确定才能上传。
- 如果上传失败，可能是没有权限，尝试一下`sudo rz`

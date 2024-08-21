---
layout: post
category: env
title: 安装服务器的环境
---

## Git ##

### 下载 ###

可以到[https://github.com/git/git/releases](https://github.com/git/git/releases)，去查看最新的发布版本。

如果还没有安装过GIT，可以使用wget下载最新的版本：

	cd /usr/local/src/git
	wget -c https://github.com/git/git/archive/v2.0.2.tar.gz
	tar xvf v2.0.2.tar.gz

如果安装过GIT，可以使用`git clone`最新的版本分支：

	git clone https://github.com/git/git.git git-2.0.2 -b v2.0.2

### 安装 ###

编译安装：

	cd git-2.0.2
	make configure
	./configure --prefix=/usr/local/git
	make && make install

修改`/etc/profile`，在PATH中加入git路径，并执行`source /etc/profile`：

	GIT_HOME=/usr/local/git
	PATH=$PATH:$GIT_HOME/bin:$GIT_HOME/libexec/git-core
	export PATH GIT_HOME

确认是否安装成功：

	git --version

### 备注 ###

如果执行`git clone`命令时报错：

	error: SSL certificate problem, verify that the CA cert is OK.

可以设置`git config`，如下：

	git config --global http.sslVerify false

## Node ##

### 环境要求 ###

* GCC 4.2 或更新版本
* G++ 4.2 或更新版本
* Python 2.6 或 2.7
* GNU Make 3.81 或更新版本

一般服务器都会具备上述条件，如果不具备，参见后文的《安装Node的依赖》。

### 下载 ###

可以到[https://github.com/joyent/node/releases](https://github.com/joyent/node/releases)，去查看最新的发布版本。

可以使用wget下载最新的版本：

	cd /usr/local/src/node
	wget -c https://github.com/joyent/node/archive/v0.10.30.tar.gz
	tar xvf v0.10.30

可以使用`git clone`最新的版本分支：

	git clone https://github.com/joyent/node.git node-0.10.30 -b v0.10.30

### 安装 ###

编译安装：

	cd node-0.10.30
	./configure --prefix=/usr/local/node
	make && make install

修改`/etc/profile`，在PATH中加入Node路径，并执行`source /etc/profile`：

	NODE_HOME=/usr/local/node
	PATH=$PATH:$NODE_HOME/bin
	export PATH NODE_HOME

确认是否安装成功：

	node -v

### 本地化NPM配置 ###

> 国内服务器建议使用

用户根目录下如果有NPM本地配置文件`.npmrc`，写入如下内容：

	cd ~
	registry=http://r.cnpmjs.org

如果用户根目录没有`.npmrc`文件，使用以下命令生成：

	cd ~
	echo registry=http://r.cnpmjs.org > .npmrc


**备注：**此配置用于从国内的NPM镜像库更新数据。

### 检查更新到Node的最新版本 ###

> 建议操作

	npm install -g n
	n stable

## MongoDB ##

在[http://www.mongodb.org/downloads](http://www.mongodb.org/downloads)下载MongoDB到`/usr/local/src/mongodb`。

	cd /usr/local/src/mongodb
	wget -c http://fastdl.mongodb.org/linux/mongodb-linux-x86_64-2.6.3.tgz
	tar xvf mongodb-linux-x86_64-2.6.3.tgz
	mv ./mongodb-linux-x86_64-2.6.3 /usr/local/mongodb

修改`/etc/rc.local`，将mongoDB服务加入随机启动

	numactl --interleave=all /usr/local/mongodb/bin/mongod --port 27017 --directoryperdb --fork --dbpath=/home/{服务名称}/data/mongodb/data  --logpath=/home/{服务名称}/data/mongodb/log/mongodb.log > /dev/null &

**注意：**如果提示`WARNING: You are running on a NUMA machine.`警告信息，则在原启动命令前面加`numactl –interleave=all`。

修改`/etc/profile`，在PATH中加入MongoDB路径，并执行`source /etc/profile`：

	MONGODB_HOME=/usr/local/mongodb
	PATH=$PATH:$MONGODB_HOME/bin
	export PATH MONGODB_HOME


## Redis ##

在[http://www.redis.io/download](http://www.redis.io/download)下载Redis到`/usr/local/src/redis`。

	cd /usr/local/src/redis
	wget -c http://download.redis.io/releases/redis-2.8.13.tar.gz
	tar xvf redis-2.8.13.tar.gz
	cd redis-2.8.13
	
	make

	cp /usr/local/src/redis/redis-2.8.13/redis.conf /usr/local/redis/redis.conf
	cp /usr/local/src/redis/redis-2.8.13/src/redis-server /usr/local/redis/redis-server
	cp /usr/local/src/redis/redis-2.8.13/src/redis-cli /usr/local/redis/redis-cli
	cp /usr/local/src/redis/redis-2.8.13/src/redis-benchmark /usr/local/redis/redis-benchmark

修改`/etc/rc.local`，将Redis服务加入随机启动

	/usr/local/redis/redis-server /usr/local/redis/redis.conf > /dev/null &

可以修改`/usr/local/redis/redis.conf`配置Redis服务。

修改`/etc/profile`，在PATH中加入Redis路径，并执行`source /etc/profile`：

	PATH=$PATH:/usr/local/redis
	export PATH

主要配置参数的意义：

- daemonize：是否以后台daemon方式运行
- pidfile：pid文件位置
- port：监听的端口号
- timeout：请求超时时间
- loglevel：log信息级别
- logfile：log文件位置
- databases：开启数据库的数量
- save * (*：保存快照的频率，第一个*表示多长时间，第三个*表示执行多少次写操作。在一定时间内执行一定数量的写操作时，自动保存快照。可设置多个条件)
- rdbcompression：是否使用压缩
- dbfilename：数据快照文件名（只是文件名，不包括目录）
- dir：数据快照的保存目录（这个是目录）
- appendonly：是否开启appendonlylog，开启的话每次写操作会记一条log，这会提高数据抗风险能力，但影响效率。
- appendfsync：appendonlylog如何同步到磁盘（三个选项，分别是每次写都强制调用fsync、每秒启用一次fsync、不调用fsync等待系统自己同步）

## 安装Node的依赖 ##

### GCC ###

下载文件：

	#cd /usr/local/src
	#wget ftp://gcc.gnu.org/pub/gcc/infrastructure/mpc-0.8.1.tar.gz
	#wget ftp://gcc.gnu.org/pub/gcc/infrastructure/mpfr-2.4.2.tar.bz2
	#wget ftp://gcc.gnu.org/pub/gcc/infrastructure/gmp-4.3.2.tar.bz2
	#wget http://ftp.gnu.org/gnu/gcc/gcc-4.6.1/gcc-4.6.1.tar.bz2
	 
	#tar jxvf gmp-4.3.2.tar.bz2 
	#cd gmp-4.3.2
	#./configure --prefix=/usr/local/gmp-4.3.2
	#make 
	#make check
	#make  install
	 
	#tar jxvf mpfr-2.4.2.tar.bz2
	#cd mpfr-2.4.2
	#./configure --prefix=/usr/local/mpfr-2.4.2 --with-gmp=/usr/local/gmp-4.3.2
	#make && make install
 
	#tar zxvf mpc-0.8.1.tar.gz
	#cd mpc-0.8.1
	#./configure --prefix=/usr/local/mpc-0.8.1 --with-gmp=/usr/local/gmp-4.3.2 --with-mpfr=/usr/local/mpfr-2.4.2
	#make && make install
	 
	#tar jxvf gcc-4.6.1.tar.bz2
	#cd gcc-4.6.1

编译前需要执行上述命令，否则报错找不到依赖库。

修改`/etc/profile`，加入：

	export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/mpc-0.8.1/lib:/usr/local/gmp-4.3.2/lib:/usr/local/mpfr-2.4.2/lib

	LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/gcc-4.6.1/lib:/usr/local/mpc-0.8.1/lib:/usr/local/gmp-4.3.2/lib:/usr/local/mpf
	r-2.4.2/lib
	export LD_LIBRARY_PATH
 
执行：

	#source /etc/profile
	#./configure --prefix=/usr/local/gcc-4.6.1 --enable-threads=posix --disable-checking --disable-multilib --enable-languages=c,c++,java --with-gmp=/usr/local/gmp-4.3.2 --with-mpfr=/usr/local/mpfr-2.4.2 --with-mpc=/usr/local/mpc-0.8.1
	#make && make install
 
让两个版本gcc并存：

	#cd  /usr/bin
	#mv gcc gcc4.1
	#ln -s /usr/local/gcc-4.6.1/bin/gcc /usr/bin/gcc
	#mv g++ g++4.1
	#ln -s /usr/local/gcc-4.6.1/bin/g++ /usr/bin/g++
	#cp  /usr/local/gcc-4.6.1/bin/gcj /usr/bin/

至此可以直接使用gcc，g++和gcj命令

### Python ###

在[https://www.python.org/download/](https://www.python.org/download/)查看最新版本。

	cd /usr/local/src/python
	wget -c --no-check-certificate https://www.python.org/ftp/python/2.7.8/Python-2.7.8.tar.xz
	xz -d Python-2.7.8.tar.xz
	tar xvf Python-2.7.8.tar
	cd Python-2.7.8
	./configure --prefix=/usr/local/python
	make && make install

修改`/etc/profile`，在PATH中加入git路径，并执行`source /etc/profile`：

	PYTHON_HOME=/usr/local/python
	PATH=$PATH:$PYTHON_HOME/bin
	export PATH PYTHON_HOME

清理原有安装：

	cd /usr/bin
	ll |grep python  
	rm -rf python
	ln -s /usr/local/python/bin/python ./python

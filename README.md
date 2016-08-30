
hBlog使用说明

请确保本机nodeJS版本不低于[thinkJS](http://thinkjs.org)要求版本

## 安装项目依赖

定位至项目目录,运行以下命令安装依赖:

```
npm install
```
##导入数据库至mysql

数据库文件位于项目根目录下 init.sql

导入之前请自行创建名为blog的数据库,打开数据库后执行导入init.sql

## 修改数据库配置文件

数据库连接配置在项目目录下:src/common/config/db.js

## Start server

依赖安装完执行以下命令开启本地服务器:

```
npm start
```
本地服务器开启成功后,即可访问localhost:8360查看本地效果

演示地址:[黄尧鑫的小站](http://huangyaoxin.com)

有任何问题请在此页面留言:[更新日志](http://huangyaoxin.com/home/index/detial/id/25/path/25)

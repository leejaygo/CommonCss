# CommonCss

## 通用css样式集合，分PC端和TW端

### express-static 加载静态资源
### forever 让node一直在后台执行，永不停机
### supervisor 全局安装可以动态刷新整个项目，不需重启node

``
$ sudo npm install forever -g   #安装
$ forever start app.js          #启动
$ forever stop app.js           #关闭
$ forever start -l forever.log -o out.log -e err.log app.js   #输出日志和错误


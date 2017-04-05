// 配置静态资源的访问路径
var path = require('path');
var expressStatic = require('express-static');
module.exports = function (app){
	app.use('/staticPc',expressStatic(path.join(__dirname, '../public/pc')));
	app.use('/staticPcCss',expressStatic(path.join(__dirname, '../public/pc/css')));
	app.use('/staticPcJs',expressStatic(path.join(__dirname, '../public/pc/js')));
	app.use('/staticPcImg',expressStatic(path.join(__dirname, '../public/pc/img')));

	app.use('/bizPc',expressStatic(path.join(__dirname, '../app/views/pc')));
	app.use('/bizTw',expressStatic(path.join(__dirname, '../app/views/tw')));
}
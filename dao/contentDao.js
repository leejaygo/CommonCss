// dao/userDao.js
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../config/db');
var $sql = require('./mappingContentSql');
// 使用连接池，提升性能
var pool  = mysql.createPool($conf.mysql);

var controllers = require('../app/controller/index.server.controller.js');
 
// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
	if(typeof ret === 'undefined') {
		res.json({
			code:'1',
			msg: '操作失败'
		});
	} else {
		res.json(ret);
	}
};
 
module.exports = {
	queryAllContents: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			connection.query($sql.queryAll, function(err, result) {
				controllers.renderPage(result ,req, res, next);
			});
		});
	},
};
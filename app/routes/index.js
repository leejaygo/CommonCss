var path = require('path');
var index = require(path.resolve(__dirname, '../controller/index.server.controller.js'));
var userDao = require('../../dao/userDao');
var contentDao = require('../../dao/contentDao');
module.exports = function (app) { 
	//根目录
    app.get('/',function (req, res, next){
    	contentDao.queryAllContents(req, res, next);
    });
};

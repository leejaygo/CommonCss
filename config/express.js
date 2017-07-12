var express = require('express');
var router = express.Router();
var expressStatic = require('express-static');
var path = require('path');
var morgan = require('morgan');//记录日志
var compress = require('compression');//response的压缩
var bodyParser = require('body-parser');//提供DELETE、PUT等HTTP请求方式的处理
var methodOverride = require('method-override');
var ejs = require('ejs');

module.exports = function (){
	var app = express();
	if (process.env.NODE_ENV === 'development'){
	    app.use(morgan('dev'));
	}else if(process.env.NODE_ENV == 'production'){
	    app.use(compress());
	}

	app.use(bodyParser.urlencoded({
        extended: true
    }));

	//设置ejs模板的文件名为.html,并且设置的文件夹
	app.set('views', path.join(__dirname, '../app/views'));//设置views末班防止目录，这样在controller里就不用写那么多路径了
	app.engine('.html', ejs.__express);//扩展ejs的扩展名为.html结尾
	app.set('view engine', 'html');//设置view engine渲染html文件
	
	app.set('port', process.env.PORT || 3000);

	require('./config.js')(app);


	app.use(morgan('dev'));

	require('../app/routes/index')(app);
	return app;
}
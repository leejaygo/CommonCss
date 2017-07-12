var bll = require('../../bll/content');
module.exports = {
	renderPage: function (obj, req, res, next){
		var datas = bll.getContents();
		res.render('pc/page/commonPC',datas);
	}
}
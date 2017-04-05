var path = require('path');
module.exports = function (app) {
    var index = require(path.resolve(__dirname, '../controller/index.server.controller.js'));
    app.get('/',index.render);
};

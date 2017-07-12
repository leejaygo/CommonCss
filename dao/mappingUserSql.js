// dao/userSqlMapping.js
// CRUD SQL语句
var user = {
	insert:'INSERT INTO user(name, password) VALUES(?,?)',
	update:'update user set name=?, password=? where id=?',
	delete: 'delete from user where id=?',
	queryById: 'select * from user where id=?',
	queryAll: 'select * from user'
};
 
module.exports = user;
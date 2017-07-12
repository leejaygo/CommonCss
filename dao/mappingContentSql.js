var contents = {
	add: 'insert into content(keyword, code, descript, tag, class) values (?,?,?,?,?)',
	update: 'update content set keyword=?,code=?,descript=?,tag=?class=? where cid=?',
	delete: 'delete from content where cid=?',
	queryAll: 'select * from content',
	querybyId: 'select * from content where id=?'
}

module.exports = contents;
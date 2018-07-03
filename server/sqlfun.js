// sql语句
var sqlMap = {
    // 用户
    user: {
        login: 'SELECT * FROM node_user WHERE name = ?;',
        add: 'insert into  node_user (name, age) values ( ?, ?);'
    }
}

module.exports = sqlMap;
/**
 * Created by mike on 12.03.18.
 */
const mysql = require('mysql');
module.exports = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'shoppingList'
});


/**
 * Created by mike on 12.03.18.
 */
const mysql = require('mysql');
module.exports = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root', //mikeshalin_shop
    password : 'root', //1Ayei&0d
    database : 'shoppingList'
});



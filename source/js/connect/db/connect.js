/**
 * Created by mike on 12.03.18.
 */
const mysql = require('mysql');
module.exports = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root', //hBCm3IAnQj
    database : 'shoppingList' //shoppinglist
});


/**
 * Created by mike on 12.03.18.
 */
const db = require("./source/js/mysql/connect.js"),
      // sql = require("./source/js/mysql/sql.js"),
      express = require("express"),
      app = express(),
      server = require("http").Server(app),
      io = require("socket.io")(server),
      port = 3003;

server.listen(port);
console.log("Создание сервера");

var sql = `SELECT * FROM product`;
db.query(sql, function (error, result, fields) {
    if (result){
        sql = result;
        console.log(`результат подключения к бд ok: `,sql);
    }
    if (error){
        console.log(`результат подключения к бд err: ${error}`);
    }
});

io.on("connection",function (socket) {
    console.log("Отправка данных на фронт");
    socket.emit("db",sql);

    socket.on('handleDone',function (ID,done) {
        db.query(`UPDATE product SET done=${!done} WHERE ID =${ID}`, function (error, result, fields) {
            if (result){
                console.log(`результат обновления записи ok: `,!done);
                socket.emit("updateDoneRow",{status:"ok",ID:ID})
            }
            if (error){
                console.log("updateDoneRow","err");
            }
        });
        console.log('-----------'); // Logging
        console.log('Получил ID купленного продукта', ID);
    })
});
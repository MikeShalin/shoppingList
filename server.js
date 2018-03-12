/**
 * Created by mike on 12.03.18.
 */
const db = require("./source/js/mysql/connect.js"),
      express = require("express"),
      app = express(),
      server = require("http").Server(app),
      io = require("socket.io")(server),
      port = 3001;

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
});
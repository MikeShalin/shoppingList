/**
 * Created by mike on 12.03.18.
 */
const sql = require("./source/js/back/sql.js"),
      express = require("express"),
      app = express(),
      server = require("http").Server(app),
      io = require("socket.io")(server),
      port = 3003;

server.listen(port);
console.log("Создание сервера");
io.on("connection",socket => {
    console.log("Отправка данных на фронт");
    sql.query(sql.selectAll,(sql)=>socket.emit("db",sql));

    socket.on('addNewProduct',data => {
        const {title,startDate,shelfLife} = data;
        sql.query(sql.insert(title,startDate,shelfLife),()=>
            socket.emit("addNewProduct",{status:"ok",data:{
                title:title,startDate:startDate,shelfLife:shelfLife
            }}));
    });
    
    socket.on('handleDone', (ID,done) =>{
        sql.query(sql.checked(done,ID),()=>socket.emit("updateDoneRow",{status:"ok",ID:ID}));
        console.log('Получил ID купленного продукта', ID);
    })
});
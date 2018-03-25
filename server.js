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
        const {title} = data;
        sql.query(sql.insert(title),(res)=>
            socket.emit("addNewProduct",{status:"ok",data:{
                ID:res.insertId,title:title
            }}));
    });
    
    socket.on('handleDone', (ID,done) =>{
        sql.query(sql.checked(done,ID),()=>socket.emit("updateDoneRow",{status:"ok",ID:ID}));
        console.log('Получил ID купленного продукта', ID);
    });
    
    socket.on('handleDelete', ID => {
        sql.query(sql.onDelete(ID),()=>socket.emit("deleteProduct",{status:"ok",ID:ID}))
    });
});
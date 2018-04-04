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
        console.log('Новый продукт:',data);
        sql.query(sql.insert(data),(res)=>
            io.sockets.emit("addNewProduct",{status:"ok",data:{
                ID:res.insertId,title:data
            }}));
    });
    
    socket.on('handleDone', (ID,done) =>{
        sql.query(sql.checked(done,ID),()=>io.sockets.emit("updateDoneRow",{status:"ok",ID:ID}));
        console.log('Получил ID купленного продукта', ID);
    });
    
    socket.on('handleDelete', ID => {
        console.log('Удалил  продукт:',ID);
        sql.query(sql.onDelete(ID),()=>io.sockets.emit("deleteProduct",{status:"ok",ID:ID}))
    });

//    Получаю данные о пользователе
    socket.on('getAuth', user => {
        sql.query(sql.getAuthUsers(user.login,user.password),(sql)=>socket.emit("db",sql))
    })
});
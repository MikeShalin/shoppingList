/**
 * Created by mike on 12.03.18.
 */
const db = require("../connect/db/connect.js");

module.exports ={
    selectProductList: (userId) => {return `SELECT title, P.ID FROM userProducts AS UP INNER JOIN product AS P WHERE UP.userID = ${userId} AND UP.productID = P.ID`},
    selectAll:`SELECT * FROM product`,
    getAuthUsers: (login,password) => {return `SELECT ID FROM users WHERE login = '${login}' AND password = '${password}'`},
    checked:(done,ID)=>{return `UPDATE product SET done=${!done} WHERE ID =${ID}`},
    insert:(table,name,value)=>{return `INSERT INTO ${table}(${name}) VALUES ('${value}')`},
    insertUserProducts:(userId,productId)=>{return `INSERT INTO userProducts(userId,productId) VALUES (${userId},${productId})`},
    registrationUser:(login,password)=>{return `INSERT INTO users(login, password) VALUES ('${login}', '${password}')`},
    checkLogin:(login) => {return `SELECT COUNT(*) AS C FROM users WHERE login = '${login}'`},
    onDelete:(ID)=>{return `DELETE userProducts, product FROM userProducts, product WHERE userProducts.productID = product.ID AND product.ID = ${ID}`},
    query: (sql,callback)=>{
        db.query(sql, (error, result, fields) =>  {
            if (result){
                callback(result);
                console.log(`результат подключения к бд ok: `,result);
            }
            if (error){
                console.log(`результат подключения к бд err: ${error}`);
            }
        })
    }
};


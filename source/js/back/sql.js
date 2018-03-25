/**
 * Created by mike on 12.03.18.
 */
const db = require("./connect.js");

module.exports ={
    selectAll:`SELECT * FROM product`,
    checked:(done,ID)=>{return `UPDATE product SET done=${!done} WHERE ID =${ID}`},
    insert:(title)=>
    {
            return `INSERT INTO product(title, done) VALUES ('${title}', 0)`
    },
    onDelete:(ID)=>{return `DELETE FROM product WHERE ID=${ID}`},
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


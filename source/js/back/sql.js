/**
 * Created by mike on 12.03.18.
 */
const db = require("./connect.js");

module.exports ={
    selectAll:`SELECT * FROM product`,
    checked:(done,ID)=>{return `UPDATE product SET done=${!done} WHERE ID =${ID}`},
    insert:(title,startDate,shelfLife)=>
    {
            return `INSERT INTO product(title, startDate, shelfLife, done) VALUES ('${title}', '${startDate}', '${shelfLife}', 0)`
    },
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


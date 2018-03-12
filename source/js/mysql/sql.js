/**
 * Created by mike on 12.03.18.
 */
module.exports ={
    selectAll:`SELECT * FROM product`,
    buyById: function (ID) {
        return `UPDATE product SET done=1 WHERE ID =${ID}`;
    }
};


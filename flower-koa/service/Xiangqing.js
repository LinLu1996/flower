const db = require('./Db');
class Admindb {
    async query(id) {
        let admins = [];
        await db.exec('select img1,img2,img3,img4,dire,list1,list2,list3,list4 from xiangqing where id=?',id)
            .then(rows =>{
                admins=rows.map(row=>{
                    let o={};
                    Object.assign(o,row);
                    return o;
                });
            })
            .catch(e => {
                console.log(e)
            })
        return admins[0]
    }
}
module.exports = new Admindb();
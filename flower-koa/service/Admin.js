const db = require('./Db');
class Admindb {
    async addAdmin(user) {
        let id = 1;
        await db.exec('insert into admin set ?', {
            phone: user.phone,
            pwd: user.pwd
        })
            .then(rows => {
                id = rows.insertId;
            })
            .catch(e => {
                console.log(e);
            })
        return id;
    }
    async query(admin) {
        let admins = [];
        await db.exec(`select phone,pwd from admin where phone='${admin.phone}' and pwd='${admin.pwd}'`)
            .then(rows => {
                admins=rows.map(row=>{
                    let o={};
                    Object.assign(o,row);
                    console.log(o)
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
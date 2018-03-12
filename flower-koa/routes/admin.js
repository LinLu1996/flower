const router = require('koa-router')();
const adminDb=require('../service/Admin');
router.prefix('/user');
router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})
router.post('/login',async function (ctx, next) {
    ctx.set("Access-Control-Allow-Origin","*");
    let admin =JSON.parse(ctx.request.body);
    console.log(admin);
    let admins =await adminDb.query(admin);
    console.log(admins);
    if(admins){
        ctx.body={
            status:"ok"
        }
    }else{
        ctx.body={
            status:"no"
        }
    }
})
router.post('/add',async function(ctx,next){
    ctx.set("Access-Control-Allow-Origin","*");
    let user =JSON.parse(ctx.request.body);
    console.log(user);
    let id=await adminDb.addAdmin(user);
    console.log(id);
    ctx.body={
        id:id
    }
})
module.exports = router
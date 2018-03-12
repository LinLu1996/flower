const router = require('koa-router')()
const xiangqingDb=require('../service/Xiangqing');
router.prefix('/shangping')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})
router.get('/show', async function (ctx, next) {
  ctx.set("Access-Control-Allow-Origin","*");
  var id =ctx.query.id;
  console.log(id);
  var img =await xiangqingDb.query(id);
  var dire =img.dire;
  var list1=img.list1;
  var list2=img.list2;
  var list3=img.list3;
  var list4=img.list4;
  delete img.dire;
  delete img.list1;
  delete img.list2;
  delete img.list3;  
  delete img.list4;  
  console.log(dire)
  var imgs =[];
  for(let i=1;i<5;i++){
    imgs.push(img["img"+i])
  }
  console.log(imgs);
  ctx.body={
    imgs,
    dire,
    list1,
    list2,
    list3,
    list4
  }

})

module.exports = router

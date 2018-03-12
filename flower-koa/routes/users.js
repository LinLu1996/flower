const router = require('koa-router')()

router.prefix('/admin')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

// router.post('/add', async function (ctx, next) {
//   ctx.set("Access-Control-Allow-Origin","*");
//   ctx.body = ctx.request.body;
// })

module.exports = router

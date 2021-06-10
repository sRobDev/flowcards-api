const { PrismaClient } = require('@prisma/client');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const koaBody = require('koa-body');
const router = require('@koa/router')();
const app = module.exports = new Koa();
const prisma = new PrismaClient();

// app.use(bodyParser());
app.use(koaBody());
// app.use(ctx => ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`);

router.get('/', hello)
  .get('/retrieve/:id', test)
  .post('/create', create);

app.use(router.routes());


async function hello(ctx) {
  ctx.body = 'Hello World';
}

async function test(ctx) {
  ctx.body = await prisma.test.findUnique({
    where: {
      id: parseInt(ctx.params.id)
    }
  });
}

async function create(ctx) {
  if(!ctx.request.body) ctx.throw(400, 'Bad Request!');
  const { comment } = ctx.request.body;

  const newComment = await prisma.test.create({
    data: { comment }
  });

  ctx.body = newComment;
}

if (!module.parent) app.listen(3000);
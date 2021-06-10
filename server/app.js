const { PrismaClient } = require('@prisma/client');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const koaBody = require('koa-body');
const router = require('@koa/router')();
const app = module.exports = new Koa();
const prisma = new PrismaClient();

app.use(koaBody());

router.get('/', hello)
  .post('/user/new', createUser)
  .get('/user/:id', getUser)
  .post('/card/new/:id', createCard)
  .post('/card/:id/update', updateCard)
  .get('/card/:id', getCard)
  .post('/topic/new/:id', createTopic)
  .get('/topic/:id', getTopic);

app.use(router.routes());


async function hello(ctx) {
  ctx.body = 'Hello World';
}

async function getUser(ctx) {
  ctx.body = await prisma.user.findUnique({ where: { id: parseInt(ctx.params.id) } })
}

async function createUser(ctx) {
  ctx.body = await prisma.user.create({
    data: {
      name: ctx.request.body.name
    }
  });
}

async function getCard(ctx) {
  ctx.body = await prisma.card.findUnique({ where: { id: parseInt(ctx.params.id) } })
}

async function createCard(ctx) {
  const authorId = +ctx.params.id;

  ctx.body = await prisma.card.create({ data: {...ctx.request.body, authorId } });
}

async function updateCard(ctx) {
  ctx.request.body.topicId = +ctx.request.body.topicId || null;
  ctx.body = await prisma.card.update({
    where: {
      id: parseInt(ctx.params.id)
    },
    data: { ...ctx.request.body }
  });
}

async function getTopic(ctx) {
  ctx.body = await prisma.topic.findUnique({
    where: {
      id: parseInt(ctx.params.id)
    },
    include: {
      cards: true
    }
  });
}

async function createTopic(ctx) {
  const authorId = +ctx.params.id;

  ctx.body = await prisma.topic.create({ data: {...ctx.request.body, authorId } });
}

const simpleCreate = async (body, table) => await prisma[table].create({ data: {...body } });

if (!module.parent) app.listen(3000);
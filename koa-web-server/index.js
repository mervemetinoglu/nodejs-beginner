const Koa = require("koa");
const KoaRouter = require("koa-router");

const app = new Koa();
const router = new KoaRouter();

router.get("/index", (ctx) => {
  ctx.status = 200;
  ctx.body = "<h1> Welcome to index page! </h1>";
});

router.get("/about", (ctx) => {
  ctx.status = 200;
  ctx.body = "<h1> Welcome to about page! </h1>";
});

router.get("/contact", (ctx) => {
  ctx.status = 200;
  ctx.body = "<h1> Welcome to contact page! </h1>";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);

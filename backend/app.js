const Koa = require('koa');
const app = new Koa();
const config = require('./config');

// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(config.port);
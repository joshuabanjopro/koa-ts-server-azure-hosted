import "dotenv/config";
import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
    ctx.body = "Hello World... firing on all cylinders..."
})

app.listen(Number(process.env.PORT), () => {
    console.log(`Server started with port ${process.env.PORT}`)
});
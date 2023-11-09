import 'reflect-metadata';
import Koa from 'koa';
import { useContainer, useKoaServer } from 'routing-controllers';
import KoaLogger from 'koa-logger';
import Container from 'typedi';

const main = async () => {
    const app = new Koa();
    app.use(KoaLogger());
    app.listen(3000);

    useContainer(Container);
    useKoaServer(app, {
        defaultErrorHandler: false,
        controllers: [__dirname + '/**/*.controller.{ts,js}'],
        middlewares: [__dirname + '/**/*.{middleware,interceptor}.{ts,js}'],
    });
};

main();

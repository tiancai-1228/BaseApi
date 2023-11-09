import 'reflect-metadata';
import Koa from 'koa';
import { useKoaServer } from 'routing-controllers';
import KoaLogger from 'koa-logger';

const main = async () => {
    const app = new Koa();
    app.use(KoaLogger());
    app.listen(3000);

    useKoaServer(app, {
        defaultErrorHandler: false,
        controllers: [__dirname + '/**/*.controller.{ts,js}'],
    });
};

main();

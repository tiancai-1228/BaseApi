import {
    JsonController,
    Get,
    QueryParams,
    Post,
    Ctx,
    Body,
} from 'routing-controllers';
import { CreateParams, User } from '../types/user.type';
import Koa from 'koa';

@JsonController('/user')
export class UserController {
    @Get('/')
    async GetUser(@QueryParams() query: User): Promise<any> {
        return { name: query.name };
    }

    @Post('/Create')
    async CreateUser(
        @Ctx() ctx: Koa.Context,
        @Body() params: CreateParams,
    ): Promise<User> {
        return { name: 'z' };
    }
}

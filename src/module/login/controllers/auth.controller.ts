import Koa from 'koa';
import Container, { Inject } from 'typedi';
import { JsonController, Post, Ctx, Body } from 'routing-controllers';
import { LoginParams, Me } from '../types/auth.type';
import { AuthService } from '../services/auth.service';

@JsonController('/')
export class AuthController {
    @Post('/login')
    async Login(
        @Ctx() ctx: Koa.Context,
        @Body() params: LoginParams,
    ): Promise<Me> {
        const authService = Container.get(AuthService);
        return authService.login(params);
    }
}

import Koa from 'koa';
import { Inject, Service } from 'typedi';
import { JsonController, Post, Ctx, Body } from 'routing-controllers';
import { LoginParams, Me } from '../types/auth.type';
import { AuthService } from '../services/auth.service';

@JsonController('/')
@Service()
export class AuthController {
    @Inject()
    private authService: AuthService;

    @Post('/login')
    async Login(
        @Ctx() ctx: Koa.Context,
        @Body() params: LoginParams,
    ): Promise<Me> {
        return await this.authService.login(params);
    }
}

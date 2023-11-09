import { Service } from 'typedi';
import { LoginParams, Me, MePayload } from '../types/auth.type';
import jwt from 'jsonwebtoken';

@Service()
export class AuthService {
    async login(params: LoginParams): Promise<Me> {
        try {
            const user: MePayload = {
                id: '1',
                code: 'code',
                name: 'name',
                email: params.email,
            };

            const payload: MePayload = {
                ...user,
            };
            const expiresIn = Math.floor(Date.now() / 1000) + 60 * 10; // token 10分後過期。

            const token = jwt.sign(payload, 'secret', { expiresIn: expiresIn });

            return {
                ...payload,
                token,
            };
        } catch (error) {
            throw new Error('error');
        }
    }
}

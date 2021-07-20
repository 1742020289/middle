/*
 * @Author: migao@wangguoyan
 * @Date: 2021-07-13 16:32:23
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-07-13 18:22:41
 */

import { Tockens } from '@/util/base/tockens';
import { HttpModule, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [
        HttpModule.register({
            headers: {
                'Access-Control-Allow-Origin': '*',
                Authorization: Tockens.toUpstream(),
            },
        })
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}

/*
 * @Author: migao@wangguoyan
 * @Date: 2021-06-19 11:31:28
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-06-19 18:34:26
 */

import { AuthDTO } from './auth.dto';

import { Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('权限 Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    /**
     * @description 登录接口
     * @param request
     * @returns
     */

    @Post('login')
    @ApiBody({ type: AuthDTO.LoginParam })
    @ApiOkResponse({ type: AuthDTO.LoginReturn })
    public async login(@Req() request: Request) {
        let res = await this.authService.login(request);
        return res;
    }

    /**
     * @description 注销登录接口
     * @param request
     * @returns
     */
    /**
     * @description
     * @param request
     * @returns
     */
    @Post('logout')
    @ApiOkResponse({ type: AuthDTO.LogoutReturn })
    public async logout(@Req() request: Request) {
        return await this.authService.logout(request);
    }
}

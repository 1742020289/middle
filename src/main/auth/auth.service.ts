/*
 * @Author: migao@wangguoyan 
 * @Date: 2021-06-18 16:58:09 
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-06-19 18:14:58
 */

// types
import { NSAuth } from "@/types/auth";
import { Returns } from "@/types/return-type";

// modules
import { HttpService, Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from "axios";
import { Request } from 'express';
import { config } from '@util/base/config';




@Injectable()
export class AuthService {

    public constructor(private readonly httpService: HttpService) { }


    /**
     * @description 登录
     * @param req 请求体上下文
     * @returns 返回登录结果
     */
    public async login(req: Request) {
        let res = await this.httpService.post<NSAuth.LoginReturn>(`${config.BACKEND_BASE_URL}/api/v1/auth/login`, req.body, <AxiosRequestConfig>req).toPromise();
        return res.data;
    }

    /**
     * @description 注销登录
     * @param req 请求体上下文
     * @returns 
     */
    public async logout(req: Request) {
        let res = await this.httpService.post<Returns.Construct<string>>(`${config.BACKEND_BASE_URL}/api/v1/auth/logout`, {}, <AxiosRequestConfig>req).toPromise();
        return res.data;
    }
}

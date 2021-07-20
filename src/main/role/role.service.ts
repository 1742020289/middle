/*
 * @Author: Fanpingfan
 * @Date: 2021-07-15 17:43:26
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2021-07-20 16:09:28
 */

import { HttpService, Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { config } from '@util/base/config';
import { Role } from './gd-role';
import { NSRole } from '@/types/role';
import { DatabaseService } from '../database/database.service';





@Injectable()
export class RoleService {
    constructor(private readonly httpService: HttpService,
                private readonly databaseService: DatabaseService){}
    /**
     * @description: 获取角色信息
     * @param {*} req 请求体
     * @return {*} 所有角色信息
     */        
    public async getRole(req){
        
        let res = await this.httpService.post<NSRole.roleReturn>(`${config.BACKEND_BASE_URL}/api/v1/role/page`,req.body,<AxiosRequestConfig>req).toPromise();
        let roles=res.data.data.records;
        //将数组对象转换成Map
        for(let i=0;i<roles.length;i++){
            /**单个角色Map */
            let roleMap:Role=new Role();
            for(let key in roles[i]){
               //单个角色对象转换成Map
                roleMap.set(key,roles[i][key]);
            }
            //将单个角色Map存入roleMap集合
            this.databaseService.gdDataBase.roles.set(roles[i].id,roleMap);
        }
        console.log(this.databaseService.gdDataBase);
        return res.data;
        
        
    }
}

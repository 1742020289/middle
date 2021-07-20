/*
 * @Author: wupinshuo
 * @Date: 2021-07-15 15:40:02
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2021-07-20 15:46:56
 */
import { HttpService, Injectable } from '@nestjs/common';
import {  Request } from 'express';
import { AxiosRequestConfig } from 'axios';
import { User } from './user-map';
import { NSUser } from './user';
import { config } from '@/util/base/config';
import { DatabaseService } from '../database/database.service';


@Injectable()
export class UserService {
    public constructor(private readonly httpService: HttpService,
        private readonly databaseService: DatabaseService
        ) {}

  
    // private gd_database = new GDDataBase();

    /**
     * @description 查询所有用户信息列表
     * @param  req
     * @returns 返回JSON类型的用户所有数据
     */
    public async allUsers(req: Request) {
        let res = await (
            await this.httpService
                .post<NSUser.UserReturn>(`${config.BACKEND_BASE_URL}/api/v1/user/page`,
                    req.body,
                    <AxiosRequestConfig>req,
                )
                .toPromise()
        );
        let users=res.data.data.records;
        // 循环往database中添加users 的 map

        
        for (let j = 0; j < users.length; j++) {
            /**单个用户map */
            let userMap:User=new User();
            // this.gd_database.forin_add(this.gd_database.users, res[j]);
            this.databaseService.gdDataBase.users.forin_add(userMap,users[j]);
            this.databaseService.gdDataBase.users.set(users[j].id,userMap)
        }
        
        // console.log(this.gd_database);
        
        console.log(this.databaseService.gdDataBase);

        // users map转化为json
        // let obj = this.databaseService.gdDataBase.users.map_json(this.databaseService.gdDataBase.users);
        // console.log(obj);
        // return obj;
        return res.data;
    }

    /**
     * @description:根据id查询用户信息
     * @param Query输入id的key和value
     * @returns 返回用户信息
     */
    public async idUsers(id){
        let value=this.databaseService.gdDataBase.users.get(id);
        if(value){
            console.log(`查询用户信息成功，id：${id}信息为：`);
               console.log(value);
        }else{
            console.log(`查询用户信息失败，请检查输入id是否正确~`);
        }
    }

}

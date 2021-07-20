/*
 * @Author: Fanpingfan
 * @Date: 2021-07-20 15:08:19
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2021-07-20 15:38:28
 */
import { Injectable } from '@nestjs/common';
import { GDDataBase } from './gd-database';

@Injectable()
export class DatabaseService {
    /**全局变量，实现模块间数据共享 */
    public gdDataBase=new GDDataBase();
}

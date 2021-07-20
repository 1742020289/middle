/*
 * @Author: Fanpingfan
 * @Date: 2021-07-15 17:38:23
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2021-07-20 16:15:17
 */

import {  Module } from '@nestjs/common';
import { AuthModule } from './main/auth/auth.module';
import { RoleModule } from './main/role/role.module';

import { UserModule } from './main/user/user.module';
import { DatabaseModule } from './main/database/database.module';


@Module({
  imports: [
    AuthModule,
    UserModule,
    RoleModule,
    DatabaseModule,
  ],
  providers: []
})
export class AppModule {

 }

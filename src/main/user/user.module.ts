/*
 * @Author: wupinshuo
 * @Date: 2021-07-15 15:40:02
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2021-07-20 15:17:16
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HttpModule } from '@nestjs/common';
import { Tockens } from '@/util/base/tockens';
import { DatabaseService } from '../database/database.service';

@Module({
  imports:[
    HttpModule.register({
      headers:{
        'Access-Control-Allow-Origin': '*',
        Authorization: Tockens.toUpstream(),
      }
    })
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}


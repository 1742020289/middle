/*
 * @Descripttion: 
 * @version: 
 * @Author: Fanpingfan
 * @Date: 2021-07-15 13:25:43
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2021-07-20 15:48:45
 */
import { HttpModule, Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Tockens } from '@/util/base/tockens';


@Module({
  imports:[ HttpModule.register({
    headers: {
      'Access-Control-Allow-Origin': "*",
      "Authorization": Tockens.toUpstream()
    }
  })],
  
  controllers: [RoleController],
  providers: [RoleService]
})
export class RoleModule {}

/*
 * @Author: wupinshuo
 * @Date: 2021-07-15 15:40:02
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2021-07-20 14:37:17
 */

import { Controller, Get, Post, Body, Patch, Param, Delete ,Req, Query} from '@nestjs/common';
import { UserService } from './user.service';
import { request, Request } from 'express';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserDTO } from './dto/user.dto';
import { RoleService } from '../role/role.service';
import { DatabaseService } from '../database/database.service'; 

@ApiTags('用户 User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  /**
   * @description 获取所有用户信息接口
   * @param request 
   * @returns 
   */

  @Post('/all')
  // @ApiBody({type:UserDTO.Construct})
  @ApiOkResponse({type:UserDTO.ReturnUser})
  public async allUsers(@Req() request:Request) {  
    return await this.userService.allUsers(request);
  }

/**
 * @description: 根据id查询用户信息接口
 * @param request
 * @returns 
 */

@Post('/id')
public async idUsers(@Query(){id}){
  return await this.userService.idUsers(id);
  
}


}

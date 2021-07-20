/*
 * @Author: Fanpingfan
 * @Date: 2021-07-15 17:43:26
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2021-07-20 13:46:59
 */


import { Controller, Delete, Post,Query,Req } from '@nestjs/common';
import { ApiBody, ApiOkResponse,  ApiOperation,  ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { RoleDTO } from './role.dto';
import { RoleService } from './role.service';


@ApiTags('角色 Role')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

/**
 * @description 分页查询角色信息
 * @param request
 * @returns 
 */ 
@Post()
@ApiBody({type: RoleDTO.getRoleParams})
@ApiOkResponse({type: RoleDTO.roleReturn})
public async getRole(@Req() req:Request){
  
   let res=await this.roleService.getRole(req);
   return res;
}

}


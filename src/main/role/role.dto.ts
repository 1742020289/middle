/*
 * @Author: Fanpingfan
 * @Date: 2021-07-15 17:43:26
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2021-07-19 16:09:39
 */



import { NSRole } from "@/types/role";
import { ApiProperty } from "@nestjs/swagger";

export module RoleDTO{ 
    
    /**用户角色结构 */
   class Role implements NSRole.Role{
        @ApiProperty({
            description: '角色描述'
        })
        description: string;

        @ApiProperty({
            description: '角色id'
        })
        id: string;
        @ApiProperty({
            description: '角色名称'
        })
        roleName: string;
    }
    /**查询角色信息参数 */
    export class getRoleParams implements NSRole.getRoleParams{
        @ApiProperty({
            description: '页号',
            default:1
        })
        no: number;

        @ApiProperty({
            description: '每页数量',
            default:200
        })
        size: number;
        
    }

    /**查询角色返回的结果的data */
    class roleReturnData implements NSRole.roleReturnData<Role>{
        @ApiProperty({
            description:'当前页号',
            default:1
        })
        current:number;

        @ApiProperty({
            description:'每页数量',
            default:200
        })
        size:number;

        @ApiProperty({
            description:'总数量',
            default:3
        })
        total:number;

        @ApiProperty({
            description:'角色信息',
            default:[ {
                "id": "1",
                "roleName": "admin",
                "description": "超级管理员"
              },
              {
                "id": "1285110360656404482",
                "roleName": "administrator",
                "description": "用户模式加管理"
              },
              {
                "id": "1285884650867724289",
                "roleName": "普通用户作业模型",
                "description": "只有作业模型的用户模式"
              }]
        })
        records:Role[];
    }

    /**查询角色信息返回结果 */
    export class roleReturn implements NSRole.roleReturn{
        @ApiProperty({
            description: '返回状态',
            default: '1'
        })
        status: number;

        @ApiProperty({
            description: '返回信息',
            default: '操作成功'
        })
        message: string;

        @ApiProperty({
            description: '返回数据结构'
        })
        data: roleReturnData;
    }
    
    /**删除角色的参数 */
    export class delRoleParam implements NSRole.delRoleParam{
        @ApiProperty({
            description: '角色ID',
            default: '1285110360656404482'
        })
        id: string;
    }
    
}